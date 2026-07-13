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

        self.assertNotIn("score de aderência", html)
        self.assertNotIn(">84<", html)
        self.assertNotIn("iniciar diagnóstico", html)
        self.assertNotIn("começar pelo diagnóstico", html)

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
        script = (SITE_DIR / "script.js").read_text(encoding="utf-8")

        self.assertIn('aria-controls="navegacao-principal"', html)
        self.assertIn('"Fechar menu"', script)
        self.assertIn('event.key === "Escape"', script)


if __name__ == "__main__":
    unittest.main()
