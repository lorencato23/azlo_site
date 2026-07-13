import base64
import json
import re
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from shutil import copy2


ROOT = Path(__file__).resolve().parents[1]
GENERATOR = ROOT / "tools" / "generate_azlo_full_vector.py"


class BrandAssetGeneratorTests(unittest.TestCase):
    def test_builds_safe_assets_from_approved_raster_without_invented_geometry(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            output_dir = Path(temporary_directory)
            result = subprocess.run(
                [sys.executable, str(GENERATOR), "--output-dir", str(output_dir)],
                cwd=ROOT,
                capture_output=True,
                text=True,
                check=False,
            )

            self.assertEqual(result.returncode, 0, result.stderr)
            asset_dir = ROOT / "extraido_290626" / "site" / "assets"
            expected_assets = {
                "azlo-assinatura-aprovada-hibrida.svg": "azlo-logo-real.png",
                "azlo-assinatura-negativa-aprovada-hibrida.svg": "azlo-logo-real-white.png",
                "azlo-simbolo-aprovado-hibrido.svg": "azlo-symbol-real.png",
                "azlo-simbolo-negativo-aprovado-hibrido.svg": "azlo-symbol-real-white.png",
            }
            manifest = output_dir / "brand-assets.json"
            self.assertTrue(manifest.is_file())

            for output_name, source_name in expected_assets.items():
                output_path = output_dir / output_name
                self.assertTrue(output_path.is_file(), output_name)
                svg = output_path.read_text(encoding="utf-8")
                self.assertIn("Fonte de verdade: logo raster aprovada", svg)
                self.assertNotIn("azlo-symbol-vector", svg)
                encoded = re.search(r"data:image/png;base64,([^\"]+)", svg)
                self.assertIsNotNone(encoded, output_name)
                self.assertEqual(
                    base64.b64decode(encoded.group(1)),
                    (asset_dir / source_name).read_bytes(),
                )

            manifest_data = json.loads(manifest.read_text(encoding="utf-8"))
            self.assertEqual(len(manifest_data["assets"]), 4)
            self.assertEqual(
                {asset["output"] for asset in manifest_data["assets"]},
                set(expected_assets),
            )

    def test_rejects_invalid_master_before_touching_existing_output(self) -> None:
        source_dir = ROOT / "extraido_290626" / "site" / "assets"
        source_names = (
            "azlo-logo-real.png",
            "azlo-logo-real-white.png",
            "azlo-symbol-real.png",
            "azlo-symbol-real-white.png",
        )

        with tempfile.TemporaryDirectory() as temporary_directory:
            temporary_root = Path(temporary_directory)
            asset_dir = temporary_root / "assets"
            output_dir = temporary_root / "output"
            asset_dir.mkdir()
            output_dir.mkdir()

            for source_name in source_names:
                copy2(source_dir / source_name, asset_dir / source_name)
            (asset_dir / "azlo-symbol-real-white.png").write_bytes(b"not-a-png")

            manifest = output_dir / "brand-assets.json"
            manifest.write_text("keep-existing-output\n", encoding="utf-8")

            result = subprocess.run(
                [
                    sys.executable,
                    str(GENERATOR),
                    "--asset-dir",
                    str(asset_dir),
                    "--output-dir",
                    str(output_dir),
                ],
                cwd=ROOT,
                capture_output=True,
                text=True,
                check=False,
            )

            self.assertNotEqual(result.returncode, 0)
            self.assertIn("PNG inválido", result.stderr)
            self.assertEqual(manifest.read_text(encoding="utf-8"), "keep-existing-output\n")
            self.assertEqual([path.name for path in output_dir.iterdir()], ["brand-assets.json"])


if __name__ == "__main__":
    unittest.main()
