import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ProjectStructureTests(unittest.TestCase):
    def test_readme_documents_current_workflow_and_brand_asset_policy(self) -> None:
        readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()
        for command in ("npm run dev", "npm run lint", "npm run build"):
            self.assertIn(command, readme)
        self.assertIn("fonte de verdade", readme)
        self.assertIn("vetorizações experimentais", readme)

    def test_fonts_are_self_hosted(self) -> None:
        layout = (ROOT / "src" / "app" / "layout.tsx").read_text(encoding="utf-8")
        font_dir = ROOT / "src" / "app" / "fonts"
        self.assertIn('from "next/font/local"', layout)
        self.assertNotIn("fonts.googleapis.com", layout)
        self.assertTrue((font_dir / "fraunces-latin.woff2").is_file())
        self.assertTrue((font_dir / "hanken-grotesk-latin.woff2").is_file())

    def test_next_exports_static_site_for_vercel(self) -> None:
        next_config = (ROOT / "next.config.mjs").read_text(encoding="utf-8")
        vercel = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))
        self.assertIn("output: 'export'", next_config)
        self.assertIn("trailingSlash: true", next_config)
        self.assertEqual(vercel["framework"], "nextjs")
        self.assertTrue(vercel["headers"])
        redirect_pairs = {(item["source"], item["destination"]) for item in vercel["redirects"] if "has" not in item}
        self.assertIn(("/engineering/:path*", "/servicos/:path*"), redirect_pairs)
        self.assertIn(("/work/:path*", "/projetos/:path*"), redirect_pairs)

    def test_public_assets_only_contain_approved_brand_rasters(self) -> None:
        public_logos = ROOT / "public" / "logos"
        self.assertTrue((public_logos / "azlo-logo-real.png").is_file())
        self.assertTrue((public_logos / "azlo-logo-real-white.png").is_file())
        self.assertTrue((public_logos / "azlo-symbol-real.png").is_file())
        self.assertTrue((public_logos / "azlo-symbol-real-white.png").is_file())
        self.assertFalse(any(public_logos.glob("*100vetorial*")))

    def test_old_experience_layer_is_not_in_current_source(self) -> None:
        self.assertFalse((ROOT / "src" / "components" / "experience").exists())
        self.assertTrue((ROOT / "src" / "components" / "site").is_dir())
        self.assertTrue((ROOT / "src" / "data" / "site.ts").is_file())


if __name__ == "__main__":
    unittest.main()
