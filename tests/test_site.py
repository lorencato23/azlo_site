import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class PublicSiteTests(unittest.TestCase):
    def setUp(self) -> None:
        self.layout = (ROOT / "src" / "app" / "layout.tsx").read_text(encoding="utf-8")
        self.home = (ROOT / "src" / "app" / "page.tsx").read_text(encoding="utf-8")
        self.data = (ROOT / "src" / "data" / "site.ts").read_text(encoding="utf-8")
        self.header = (ROOT / "src" / "components" / "site" / "SiteHeader.tsx").read_text(encoding="utf-8")
        self.team_card = (ROOT / "src" / "components" / "site" / "TeamCard.tsx").read_text(encoding="utf-8")
        self.css = (ROOT / "src" / "app" / "globals.css").read_text(encoding="utf-8")

    def test_public_routes_are_present(self) -> None:
        for route in ("servicos", "projetos", "sobre", "contato"):
            self.assertTrue((ROOT / "src" / "app" / route / "page.tsx").is_file())

    def test_repositioning_and_required_projects_are_present(self) -> None:
        for phrase in (
            "Sistemas clínicos e HIS",
            "IA integrada ao ambiente real",
            "LogosMed",
            "Hermes Agent",
            "Atlas Nano Agent · ANA",
            "Bots e agentes personalizados",
            "https://pj.azlo.com.br",
        ):
            self.assertIn(phrase, self.data)

    def test_team_has_current_and_future_positions(self) -> None:
        for name in ("Gabriel Lorençato", "Karson Godinho", "Alan Lima", "Fulana", "Ciclano", "Beltrano"):
            self.assertIn(name, self.data)
        self.assertEqual(self.data.count("future: true"), 3)
        self.assertIn('target="_blank"', self.team_card)
        self.assertIn('rel="noreferrer"', self.team_card)
        self.assertIn("Perfil em breve", self.team_card)

    def test_navigation_works_without_javascript(self) -> None:
        self.assertIn("<details", self.header)
        self.assertIn("<summary>", self.header)
        self.assertIn("mobile-nav", self.css)
        self.assertNotIn("use client", self.header)

    def test_metadata_and_sitemap_use_custom_domain(self) -> None:
        sitemap = (ROOT / "public" / "sitemap.xml").read_text(encoding="utf-8")
        self.assertIn('url: "https://azlo.com.br"', self.data)
        self.assertIn("metadataBase: new URL(site.url)", self.layout)
        for path in ("/servicos/", "/projetos/", "/sobre/", "/contato/"):
            self.assertIn(f"https://azlo.com.br{path}", sitemap)
        self.assertNotIn("azlo-site.vercel.app", self.layout + self.data + sitemap)

    def test_public_code_has_no_known_secret_literals_or_private_previews(self) -> None:
        public_source = "\n".join((
            self.layout,
            self.home,
            self.data,
            self.header,
            (ROOT / "src" / "components" / "site" / "SiteFooter.tsx").read_text(encoding="utf-8"),
        )).lower()
        for prohibited in ("ghp_", "private key", "individual clinical guide", "anki analytics", "process.env"):
            self.assertNotIn(prohibited, public_source)


if __name__ == "__main__":
    unittest.main()
