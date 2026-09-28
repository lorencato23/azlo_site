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
        self.problem_form = (ROOT / "src" / "components" / "site" / "ProblemForm.tsx").read_text(encoding="utf-8")
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
        for section in ("PROBLEMA", "SISTEMA", "ARQUITETURA", "ESTADO ATUAL", "PRÓXIMOS PASSOS", "SISTEMAS RELACIONADOS"):
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
            "HERMES / AGENT",
            "ATLAS / ANA",
            "HERMES / OFFICE",
            "https://logos-med.azlo.com.br",
        ):
            self.assertIn(phrase, self.data)
        self.assertNotIn("Bots e agentes personalizados", self.data)

    def test_projects_have_real_case_destinations(self) -> None:
        self.assertIn("Ver trabalho", self.project_card)
        self.assertNotIn("Ver contexto", self.project_card)
        self.assertIn("/projetos/${project.slug}", self.project_card)
        self.assertIn("SITUAÇÃO ATUAL", self.project_card)
        self.assertIn("generateStaticParams", (ROOT / "src" / "app" / "projetos" / "[slug]" / "page.tsx").read_text(encoding="utf-8"))

    def test_team_has_current_members_and_no_pseudo_vacancies(self) -> None:
        for name in ("Gabriel Lorençato", "Karson Godinho", "Alan Lima"):
            self.assertIn(name, self.data)
        for fake_name in ("Fulana", "Ciclano", "Beltrano", "Product Manager", "Backend Developer", "Frontend / UI/UX"):
            self.assertNotIn(fake_name, self.data)
        self.assertNotIn("future: true", self.data)
        about_page = (ROOT / "src" / "app" / "sobre" / "page.tsx").read_text(encoding="utf-8")
        self.assertIn("EXPANSÃO DA EQUIPE", about_page)
        self.assertIn("Não há vagas abertas", about_page)
        self.assertIn('target="_blank"', self.team_card)
        self.assertIn('rel="noreferrer"', self.team_card)

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
        for label in ("TODOS", "PRODUTO", "ENGENHARIA", "P&D", "CÓDIGO ABERTO"):
            self.assertIn(label, (ROOT / "src" / "components" / "site" / "ProjectsBrowser.tsx").read_text(encoding="utf-8"))
        self.assertIn("BETA FECHADA", self.data)
        self.assertIn("EM INCUBAÇÃO", self.data)
        self.assertIn("CANDIDATO A LANÇAMENTO", self.data)
        self.assertIn("P&D operacional", self.data)
        self.assertNotIn("R&D operacional", self.data)
        for label in ("ENTENDER", "DESENHAR", "CONSTRUIR", "OPERAR"):
            self.assertIn(f'label: "{label}"', self.data)

    def test_mnemusa_and_hermoffice_public_statuses_match_current_sources(self) -> None:
        self.assertIn('version: "v0.10.0"', self.data)
        self.assertIn("v0.10.0 conclui o roadmap principal", self.data)
        self.assertIn("sem licença definida", self.data)
        self.assertIn('status: "RELEASE CANDIDATE"', self.data)
        self.assertIn("1.0.0-rc.1", self.data)

    def test_concept_diagram_does_not_claim_live_system_status(self) -> None:
        self.assertNotIn("ONLINE", self.home)
        self.assertNotIn("ROUTES 05", self.home)
        self.assertIn("MAPA CONCEITUAL", self.home)
        self.assertIn("SEM TELEMETRIA", self.home)

    def test_social_preview_uses_current_positioning(self) -> None:
        og_source = (ROOT / "scripts" / "og-image-template.svg").read_text(encoding="utf-8")
        self.assertIn("Engenharia de sistemas", og_source)
        self.assertIn("Engineering + Labs", og_source)
        self.assertNotIn("Ideias que ganham forma", og_source)
        self.assertIn("og-image.png", self.layout)

    def test_second_pass_keeps_semantic_architecture_and_contact_flow(self) -> None:
        self.assertIn('href="/contato"', self.home)
        self.assertIn("Descrever um problema", self.home)
        self.assertIn("OPERAÇÃO → SINAL → CONTEXTO → INTERVENÇÃO → RETORNO", self.home)
        for field in ("name=\"name\"", "name=\"organization\"", "name=\"email\"", "name=\"current\"", "name=\"friction\"", "name=\"outcome\"", "name=\"stack\""):
            self.assertIn(field, self.problem_form)
        self.assertIn("mailto:", self.problem_form)
        self.assertIn("Não envie dados clínicos identificáveis", self.problem_form)

    def test_no_stale_positioning_in_public_metadata_sources(self) -> None:
        manifest = (ROOT / "public" / "site.webmanifest").read_text(encoding="utf-8")
        generator = (ROOT / "scripts" / "generate-assets.mjs").read_text(encoding="utf-8")
        for stale in ("Ideias que ganham forma", "Alpha Zenith Life Optimization", "fluxos reais"):
            self.assertNotIn(stale, manifest + generator + self.layout)

    def test_readme_and_project_metadata_match_current_release_language(self) -> None:
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        project_page = (ROOT / "src" / "app" / "projetos" / "[slug]" / "page.tsx").read_text(encoding="utf-8")
        self.assertIn("Next.js 15.5.26", readme)
        self.assertNotIn("Next.js 14", readme)
        self.assertIn("${project.title} | Projetos", project_page)
        self.assertNotIn("${project.title} | Work", project_page)


if __name__ == "__main__":
    unittest.main()
