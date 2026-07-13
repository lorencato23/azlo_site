import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ProjectStructureTests(unittest.TestCase):
    def test_obsolete_zip_is_not_part_of_the_project(self) -> None:
        self.assertFalse((ROOT / "290626.zip").exists())

    def test_readme_documents_real_quick_start_and_brand_asset_status(self) -> None:
        readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()
        self.assertIn("python -m http.server", readme)
        self.assertIn("extraido_290626/site", readme)
        self.assertIn("fonte de verdade", readme)
        self.assertIn("vetor", readme)
        self.assertIn("mailto", readme)

    def test_launch_configuration_serves_the_existing_static_site(self) -> None:
        launch = json.loads((ROOT / ".claude" / "launch.json").read_text(encoding="utf-8"))
        configuration = launch["configurations"][0]
        self.assertEqual(configuration["runtimeExecutable"], "python")
        self.assertIn("extraido_290626/site", configuration["runtimeArgs"])
        self.assertEqual(configuration["port"], 3000)

    def test_fonts_are_self_hosted(self) -> None:
        html = (ROOT / "extraido_290626" / "site" / "index.html").read_text(encoding="utf-8")
        font_dir = ROOT / "extraido_290626" / "site" / "assets" / "fonts"
        self.assertNotIn("fonts.googleapis.com", html)
        self.assertTrue((font_dir / "fraunces-latin.woff2").is_file())
        self.assertTrue((font_dir / "hanken-grotesk-latin.woff2").is_file())

    def test_vercel_deploys_the_existing_static_site_without_a_build_step(self) -> None:
        config = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))

        self.assertIsNone(config["buildCommand"])
        self.assertEqual(config["outputDirectory"], "extraido_290626/site")
        self.assertTrue(config["cleanUrls"])
        self.assertFalse(config["trailingSlash"])
        self.assertTrue((ROOT / config["outputDirectory"] / "index.html").is_file())

    def test_readme_explains_direct_vercel_import(self) -> None:
        readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()

        self.assertIn("https://vercel.com/new", readme)
        self.assertIn("lorencato23/azlo_site", readme)
        self.assertIn("root directory", readme)
        self.assertIn("extraido_290626/site", readme)


if __name__ == "__main__":
    unittest.main()
