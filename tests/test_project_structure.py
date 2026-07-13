import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ProjectStructureTests(unittest.TestCase):
    def test_obsolete_zip_is_not_part_of_the_project(self) -> None:
        self.assertFalse((ROOT / "290626.zip").exists())

    def test_readme_documents_current_workflow_and_brand_assets(self) -> None:
        readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()
        self.assertIn("npm install", readme)
        self.assertIn("npm run dev", readme)
        self.assertIn("npm run build", readme)
        self.assertIn("fonte visual aprovada", readme)
        self.assertIn("100vetorial", readme)

    def test_launch_configuration_runs_next(self) -> None:
        launch = json.loads((ROOT / ".claude" / "launch.json").read_text(encoding="utf-8"))
        configuration = launch["configurations"][0]
        self.assertEqual(configuration["runtimeExecutable"], "npm")
        self.assertEqual(configuration["runtimeArgs"], ["run", "dev", "--", "-p", "3000"])
        self.assertEqual(configuration["port"], 3000)

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
        self.assertNotIn("outputDirectory", vercel)
        self.assertTrue(vercel["headers"])
        redirect = vercel["redirects"][0]
        self.assertEqual(redirect["source"], "/:path*")
        self.assertEqual(redirect["has"], [{"type": "host", "value": "www.azlo.com.br"}])
        self.assertEqual(redirect["destination"], "https://azlo.com.br/:path*")
        self.assertTrue(redirect["permanent"])

    def test_public_experience_does_not_reference_experimental_vectors(self) -> None:
        sources = [
            ROOT / "src" / "app" / "layout.tsx",
            ROOT / "src" / "app" / "page.tsx",
            *sorted((ROOT / "src" / "components" / "experience").glob("*.tsx")),
        ]
        public_source = "\n".join(path.read_text(encoding="utf-8") for path in sources)
        self.assertNotIn("100vetorial", public_source)
        self.assertIn("azlo-symbol-real-white.png", public_source)

    def test_selected_work_is_present_and_sanitized(self) -> None:
        page = (ROOT / "src" / "app" / "page.tsx").read_text(encoding="utf-8")
        showcase = (
            ROOT / "src" / "components" / "experience" / "SelectedWork.tsx"
        ).read_text(encoding="utf-8")

        self.assertIn("<SelectedWork />", page)
        self.assertIn("Individual Clinical Guide", showcase)
        self.assertIn("Ankinator", showcase)
        self.assertIn("Anki Analytics", showcase)
        self.assertIn("DADOS DEMONSTRATIVOS", showcase)
        self.assertIn("Preview anonimizado", showcase)
        self.assertNotIn("Dra. Francine", showcase)
        self.assertNotIn("guia provisorio francine", showcase.lower())


if __name__ == "__main__":
    unittest.main()
