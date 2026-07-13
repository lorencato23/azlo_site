import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SITE_DIR = ROOT / "extraido_290626" / "site"


class SitePositioningTests(unittest.TestCase):
    def test_site_describes_azlo_honestly_without_fake_clinical_operation(self) -> None:
        html = (SITE_DIR / "index.html").read_text(encoding="utf-8").lower()

        self.assertIn("marca-mãe", html)
        self.assertIn("não é uma clínica", html)
        self.assertIn("azlo health", html)
        self.assertIn("azlo labs", html)
        self.assertIn("azlo education", html)
        self.assertIn("azlo science", html)
        self.assertIn("mailto:contato@azlo.com.br", html)
        self.assertIn(">contato@azlo.com.br</a>", html)

        self.assertNotIn("score de aderência", html)
        self.assertNotIn(">84<", html)
        self.assertNotIn("iniciar diagnóstico", html)
        self.assertNotIn("começar pelo diagnóstico", html)

    def test_current_metadata_uses_the_custom_domain(self) -> None:
        layout = (ROOT / "src" / "app" / "layout.tsx").read_text(encoding="utf-8")
        robots = (ROOT / "public" / "robots.txt").read_text(encoding="utf-8")
        sitemap = (ROOT / "public" / "sitemap.xml").read_text(encoding="utf-8")

        self.assertIn('const siteUrl = "https://azlo.com.br"', layout)
        self.assertIn("https://azlo.com.br/sitemap.xml", robots)
        self.assertIn("<loc>https://azlo.com.br/</loc>", sitemap)
        self.assertNotIn("azlo-site.vercel.app", layout + robots + sitemap)

    def test_content_remains_visible_if_external_javascript_fails(self) -> None:
        html = (SITE_DIR / "index.html").read_text(encoding="utf-8")
        css = (SITE_DIR / "styles.css").read_text(encoding="utf-8")
        script = (SITE_DIR / "script.js").read_text(encoding="utf-8")

        self.assertNotIn('classList.add("js")', html)
        self.assertIn(".reveal {\n  opacity: 1;", css)
        self.assertIn("html.reveal-ready .reveal:not(.is-visible)", css)
        self.assertNotIn("opacity: 0;", css)
        self.assertIn('classList.add("reveal-ready")', script)

    def test_mobile_menu_exposes_and_updates_accessible_state(self) -> None:
        html = (SITE_DIR / "index.html").read_text(encoding="utf-8")
        css = (SITE_DIR / "styles.css").read_text(encoding="utf-8")
        script = (SITE_DIR / "script.js").read_text(encoding="utf-8")

        self.assertIn('aria-controls="navegacao-principal"', html)
        self.assertIn('"Fechar menu"', script)
        self.assertIn('event.key === "Escape"', script)
        self.assertIn('classList.add("js-enabled")', script)
        self.assertIn("html:not(.js-enabled) .site-header", css)
        self.assertIn("html.js-enabled .site-header.nav-open .site-nav", css)
        self.assertIn("justify-self: stretch;", css)
        self.assertIn("navLinks[0]?.focus()", script)
        self.assertIn("restoreFocus: event.detail === 0", script)
        self.assertIn("requestAnimationFrame(() => menuButton.focus())", script)


if __name__ == "__main__":
    unittest.main()
