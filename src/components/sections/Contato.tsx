import { SectionLabel } from "@/components/ui/SectionLabel";

/* PLACEHOLDER: confirmar handle do Instagram antes de publicar */
const INSTAGRAM_URL = "https://instagram.com/dr.lorencato";
/* PLACEHOLDER: confirmar e-mail de contato antes de publicar */
const EMAIL = "contato@azlo.com.br";

export function Contato() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden bg-azlo-navy-deep px-6 py-24 md:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark opacity-70" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-80 w-[40rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(0,175,203,0.16),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-3xl text-center">
        <SectionLabel tone="dark" className="justify-center">
          06 · Contato
        </SectionLabel>

        <h2 className="mt-6 font-display text-display-xl font-semibold text-white text-balance">
          Comece pelo diagnóstico.
          <br className="hidden sm:block" /> Evolua pelo método.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
          Uma hipótese clara, um diagnóstico honesto e um ciclo curto de
          validação. O primeiro passo é uma conversa — sem promessa milagrosa,
          sem atalho, sem espetáculo.
        </p>

        {/* Reserva tática da tagline (Brand Book v4) */}
        <p className="mt-7 font-display text-2xl font-medium text-azlo-cyan">
          Method over miracles.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-azlo-teal px-6 text-sm font-semibold text-azlo-navy transition-colors hover:bg-azlo-cyan"
            aria-label="Falar pelo Instagram @dr.lorencato"
          >
            <InstagramIcon />
            @dr.lorencato
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-azlo-cyan/60 hover:bg-white/5"
          >
            <MailIcon />
            {EMAIL}
          </a>
        </div>

        {/* Disclaimer recomendado (saúde) — Brand Book v4 */}
        <p className="mx-auto mt-10 max-w-lg text-xs leading-relaxed text-white/40">
          Conteúdo educacional. Não substitui avaliação individual por
          profissional habilitado. Recomendações refletem a evidência disponível
          na data de publicação e podem ser revisadas.
        </p>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
