import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


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
            signature = output_dir / "azlo-assinatura-aprovada-hibrida.svg"
            symbol = output_dir / "azlo-simbolo-aprovado-hibrido.svg"
            manifest = output_dir / "brand-assets.json"
            self.assertTrue(signature.is_file())
            self.assertTrue(symbol.is_file())
            self.assertTrue(manifest.is_file())

            signature_text = signature.read_text(encoding="utf-8")
            self.assertIn("data:image/png;base64", signature_text)
            self.assertIn("Fonte de verdade: logo raster aprovada", signature_text)
            self.assertNotIn("azlo-symbol-vector", signature_text)


if __name__ == "__main__":
    unittest.main()
