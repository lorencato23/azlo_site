import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class PublicSiteTests(unittest.TestCase):
    def setUp(self) -> None:
        self.layout = (ROOT / "src" / "app" / "layout.tsx").read_text(encoding="utf-8")
        self.home = (ROOT / "src" / "app" / "page.tsx").read_text(encoding="utf-8")
        self.data = (ROOT / "src" / "data" / "site.ts").read_text(encoding="utf-8")
        self.header = (ROOT / "src" / "components" / "site" / "SiteHeader.tsx").read_text(encoding="utf-8")
        self.mobile_nav = (ROOT / "src" / "components" / "site" / "MobileNav.tsx").read_text(encoding="utf-8")
        self.project_card = (ROOT / "src" / "components" / "site" / "ProjectCard.tsx").read_text(encoding="utf-8")
        self.product_card = (ROOT / "src" / "components" / "site" / "ProductCard.tsx").read_text(encoding="utf-8")
        self.product_template = (ROOT / "src" / "components" / "site" / "ProductTemplate.tsx").read_text(encoding="utf-8")
        self.team_card = (ROOT / "src" / "components" / "site" / "TeamCard.tsx").read_text(encoding="utf-8")
        self.css = (ROOT / "src" / "app" / "globals.css").read_text(encoding="utf-8")

    def test_public_routes_are_present(self) -> None:
        for route in ("servicos", "projetos", "sobre", "contato"):
            self.assertTrue((ROOT / "src" / "app" / route / "page.tsx").is_file())
        self.assertTrue((ROOT / "src" / "app" / "labs" / "page.tsx").is_file())
        self.assertTrue((ROOT / "src" / "app" / "labs" / "[slug]" / "page.tsx").is_file())
        self.assertTrue((ROOT / "src" / "app" / "projetos" / "[slug]" / "page.tsx").is_file())

    def test_labs_catalog_has_all_requested_systems_and_reusable_template(self) -> None:
        for product in ("MNEMUSA", "THOTH", "LOGOS", "ODIN", "ANUBIS", "HERMES", "ATLAS"):
            self.assertIn(f'name: "{product}"', self.data)
        self.assertIn("generateStaticParams", (ROOT / "src" / "app" / "labs" / "[slug]" / "page.tsx").read_text(encoding="utf-8"))
        for section in ("PROBLEM", "SYSTEM", "ARCHITECTURE", "CURRENT STATE", "ROADMAP", "RELATED SYSTEMS"):
            self.assertIn(section, self.product_template)
        self.assertIn("Sigil", self.product_card)

    def test_work_filters_and_dark_design_tokens_are_present(self) -> None:
        projects_page = (ROOT / "src" / "app" / "projetos" / "page.tsx").read_text(encoding="utf-8")
        filters = (ROOT / "src" / "components" / "site" / "ProjectsBrowser.tsx").read_text(encoding="utf-8")
        for label in ("PRODUCT", "ENGINEERING", "R&D", "OPEN SOURCE"):
            self.assertIn(label, filters)
        self.assertIn("ProjectsBrowser", projects_page)
        for token in ("--bg:", "--surface:", "--border:", "--text-primary:", "--accent:", "--success:", "--warning:"):
            self.assertIn(token, self.css)

    def test_repositioning_and_required_projects_are_present(self) -> None:
        for phrase in (
            "Sistemas clínicos que travam a operação",
            "Conhecimento disperso e decisões lentas",
            "LogosMed",
            "Hermes Agent",
            "Atlas Nano Agent · ANA",
            "Hermes Office Next",
            "https://logos-med.azlo.com.br",
        ):
            self.assertIn(phrase, self.data)
        self.assertNotIn("Bots e agentes personalizados", self.data)

    def test_projects_have_real_case_destinations(self) -> None:
        self.assertIn("Ler caso", self.project_card)
        self.assertNotIn("Ver contexto", self.project_card)
        self.assertIn("/projetos/${project.slug}", self.project_card)
        self.assertIn("generateStaticParams", (ROOT / "src" / "app" / "projetos" / "[slug]" / "page.tsx").read_text(encoding="utf-8"))

    def test_team_has_current_and_future_roles_without_fake_names(self) -> None:
        for name in ("Gabriel Lorençato", "Karson Godinho", "Alan Lima", "Product Manager", "Backend Developer", "Frontend / UI/UX"):
            self.assertIn(name, self.data)
        for fake_name in ("Fulana", "Ciclano", "Beltrano"):
            self.assertNotIn(fake_name, self.data)
        self.assertEqual(self.data.count("future: true"), 3)
        self.assertIn('target="_blank"', self.team_card)
        self.assertIn('rel="noreferrer"', self.team_card)
        self.assertIn("Posição em discussão", self.team_card)

    def test_navigation_keyboard_enhancement_and_fallback(self) -> None:
        self.assertIn("<details", self.mobile_nav)
        self.assertIn("<summary", self.mobile_nav)
        self.assertIn('event.key === "Escape"', self.mobile_nav)
        self.assertIn("document.addEventListener", self.mobile_nav)
        self.assertIn("firstLinkRef.current?.focus()", self.mobile_nav)
        self.assertIn("mobile-nav", self.css)
        self.assertIn('aria-label="Navegação principal"', self.header)

    def test_metadata_and_generated_sitemap_use_custom_domain(self) -> None:
        sitemap_route = (ROOT / "src" / "app" / "sitemap.ts").read_text(encoding="utf-8")
        self.assertIn('url: "https://azlo.com.br"', self.data)
        self.assertIn("metadataBase: new URL(site.url)", self.layout)
        self.assertIn("openGraph", (ROOT / "src" / "app" / "servicos" / "page.tsx").read_text(encoding="utf-8"))
        self.assertIn("caseStudyProjects", sitemap_route)
        self.assertNotIn("azlo-site.vercel.app", self.layout + self.data + sitemap_route)

    def test_public_code_has_no_known_secret_literals_or_private_previews(self) -> None:
        public_source = "\n".join(
            path.read_text(encoding="utf-8")
            for path in (ROOT / "src").rglob("*.tsx")
        ).lower()
        for prohibited in ("ghp_", "private key", "individual clinical guide", "anki analytics", "process.env"):
            self.assertNotIn(prohibited, public_source)

    def test_status_and_language_are_consistent(self) -> None:
        self.assertNotIn("Expanding the team", self.home + self.data)
        self.assertNotIn("Technology applied with method", (ROOT / "src" / "components" / "site" / "SiteFooter.tsx").read_text(encoding="utf-8"))
        for status in ("CLOSED BETA", "OPEN SOURCE", "R&D", "MVP EM REVISÃO"):
            self.assertIn(status, self.data)

    def test_no_stale_positioning_in_public_metadata_sources(self) -> None:
        manifest = (ROOT / "public" / "site.webmanifest").read_text(encoding="utf-8")
        generator = (ROOT / "scripts" / "generate-assets.mjs").read_text(encoding="utf-8")
        for stale in ("Ideias que ganham forma", "Alpha Zenith Life Optimization", "fluxos reais"):
            self.assertNotIn(stale, manifest + generator + self.layout)


if __name__ == "__main__":
    unittest.main()
