"""Build faithful AZLO brand assets from the approved raster masters.

The previous version fabricated new SVG geometry for the symbol and changed the
letterforms. This builder deliberately does not auto-trace or redraw the brand.
Until a designer-approved vector master exists, it creates honest SVG containers
that embed the approved PNGs without visual reinterpretation.
"""

from __future__ import annotations

import argparse
import base64
import json
import struct
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_ASSET_DIR = ROOT / "extraido_290626" / "site" / "assets"
DEFAULT_OUTPUT_DIR = ROOT / "extraido_290626" / "brand-assets-safe"


@dataclass(frozen=True)
class RasterMaster:
    source_name: str
    output_name: str
    width: int
    height: int
    description: str


MASTERS = (
    RasterMaster(
        "azlo-logo-real.png",
        "azlo-assinatura-aprovada-hibrida.svg",
        976,
        383,
        "Assinatura positiva AZLO",
    ),
    RasterMaster(
        "azlo-logo-real-white.png",
        "azlo-assinatura-negativa-aprovada-hibrida.svg",
        976,
        383,
        "Assinatura negativa AZLO",
    ),
    RasterMaster(
        "azlo-symbol-real.png",
        "azlo-simbolo-aprovado-hibrido.svg",
        350,
        355,
        "Símbolo positivo AZLO",
    ),
    RasterMaster(
        "azlo-symbol-real-white.png",
        "azlo-simbolo-negativo-aprovado-hibrido.svg",
        350,
        355,
        "Símbolo negativo AZLO",
    ),
)


def read_validated_png(path: Path, expected_width: int, expected_height: int) -> bytes:
    if not path.is_file():
        raise FileNotFoundError(f"Master raster não encontrado: {path}")

    png = path.read_bytes()
    if len(png) < 24 or png[:8] != b"\x89PNG\r\n\x1a\n" or png[12:16] != b"IHDR":
        raise ValueError(f"PNG inválido: {path}")

    width, height = struct.unpack(">II", png[16:24])
    if (width, height) != (expected_width, expected_height):
        raise ValueError(
            f"Dimensões inválidas em {path}: {width}x{height}; "
            f"esperado {expected_width}x{expected_height}"
        )
    return png


def build_svg(master: RasterMaster, png: bytes) -> str:
    encoded_png = base64.b64encode(png).decode("ascii")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {master.width} {master.height}" role="img" aria-labelledby="title desc">
  <title id="title">{master.description}</title>
  <desc id="desc">Fonte de verdade: logo raster aprovada. Contêiner SVG híbrido, sem redesenho automático.</desc>
  <!-- Fonte de verdade: logo raster aprovada. Este arquivo preserva a arte sem inventar geometria. -->
  <image width="{master.width}" height="{master.height}" href="data:image/png;base64,{encoded_png}"/>
</svg>
'''


def build_assets(asset_dir: Path, output_dir: Path) -> list[Path]:
    validated_masters = [
        (
            master,
            read_validated_png(asset_dir / master.source_name, master.width, master.height),
        )
        for master in MASTERS
    ]

    output_dir.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []

    for master, png in validated_masters:
        output_path = output_dir / master.output_name
        output_path.write_text(build_svg(master, png), encoding="utf-8", newline="\n")
        written.append(output_path)

    manifest = {
        "brand": "AZLO",
        "status": "approved-raster-in-hybrid-svg",
        "source_of_truth": "extraido_290626/site/assets/*-real*.png",
        "full_vector_status": "blocked-until-designer-approved-master",
        "warning": (
            "Os antigos arquivos *_100vetorial.svg não são fonte oficial: "
            "eles reinterpretam a geometria da marca."
        ),
        "assets": [
            {
                "source": master.source_name,
                "output": master.output_name,
                "width": master.width,
                "height": master.height,
            }
            for master in MASTERS
        ],
    }
    manifest_path = output_dir / "brand-assets.json"
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    written.append(manifest_path)
    return written


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Gera ativos AZLO fiéis a partir dos PNGs aprovados, sem autovetorização."
    )
    parser.add_argument(
        "--asset-dir",
        type=Path,
        default=DEFAULT_ASSET_DIR,
        help="Diretório que contém os PNGs mestres aprovados.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Diretório de saída dos SVGs híbridos e do manifesto.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    written = build_assets(args.asset_dir.resolve(), args.output_dir.resolve())
    print("Ativos AZLO gerados sem reinterpretar a geometria:")
    for path in written:
        print(f"- {path}")
    print("Vetor integral: pendente de master aprovado por designer.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
