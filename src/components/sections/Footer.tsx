import { Logo } from "@/components/Logo";

/* PLACEHOLDER: confirmar handle do Instagram antes de publicar */
const INSTAGRAM_URL = "https://instagram.com/dr.lorencato";
/* PLACEHOLDER: confirmar e-mail de contato antes de publicar */
const EMAIL = "contato@azlo.com.br";

const navLinks = [
  { href: "#metodo", label: "Método" },
  { href: "#divisoes", label: "Divisões" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#contato", label: "Contato" },
];

// Avaliado em tempo de build (static export).
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-azlo-navy-deep px-6 py-14">
      <div className="mx-auto w-full max-w-container">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          {/* Marca */}
          <div className="flex max-w-sm flex-col gap-4">
            <Logo variant="negative" className="h-10 w-auto object-contain object-left" />
            <p className="text-sm leading-relaxed text-white/55">
              Medicina com método. Sistemas com critério.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/35">
              Alpha · Zenith · Life · Optimization
            </p>
          </div>

          {/* Navegação + contato */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Navegação do rodapé">
              <p className="mb-4 text-eyebrow font-semibold uppercase text-white/40">
                Navegar
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-4 text-eyebrow font-semibold uppercase text-white/40">
                Contato
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                    aria-label="Instagram @dr.lorencato"
                  >
                    @dr.lorencato
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} AZLO. Todos os direitos reservados.</p>
          <p>Precision for human ascent.</p>
        </div>
      </div>
    </footer>
  );
}
