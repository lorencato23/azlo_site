import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/* PLACEHOLDER: confirmar handle do Instagram antes de publicar */
const INSTAGRAM_URL = "https://instagram.com/dr.lorencato";

/* PLACEHOLDER: revisar os temas recorrentes com base no conteúdo real do canal */
const temas = [
  {
    titulo: "Educação médica",
    descricao:
      "Como estudar medicina de forma sistemática — orientada por objetivos clínicos, sem decoreba nem passividade.",
  },
  {
    titulo: "Neurologia aplicada",
    descricao:
      "Semiologia, raciocínio diagnóstico e casos clínicos. Teoria conectada diretamente à beira do leito.",
  },
  {
    titulo: "Sistemas de estudo e prática",
    descricao:
      "Organização do aprendizado contínuo: ferramentas, ciclos de revisão e critérios para decidir o que aprender.",
  },
];

/* Escada de evidência — Brand Book v4: distinguir sempre ciência consolidada,
   plausibilidade mecanística e opinião operacional. */
const escada = [
  { nome: "Evidência consolidada", w: 100 },
  { nome: "Plausibilidade mecanística", w: 76 },
  { nome: "Experiência operacional", w: 54 },
  { nome: "Hipótese em teste", w: 32 },
];

const formula = [
  "Problema concreto",
  "Princípio técnico",
  "Protocolo simples",
  "Indicador",
  "Critério de revisão",
];

export function Conteudo() {
  return (
    <section
      id="conteudo"
      className="border-t border-azlo-line bg-azlo-ice px-6 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy principal */}
          <Reveal className="flex flex-col gap-6 lg:col-span-7">
            <SectionLabel>05 · Conteúdo — @dr.lorencato</SectionLabel>

            <h2 className="font-display text-display-lg font-semibold text-azlo-navy text-balance">
              Critério aplicado, não espetáculo.
            </h2>

            {/* PLACEHOLDER: revisar apresentação do canal antes de publicar */}
            <p className="max-w-xl text-base leading-relaxed text-azlo-slate text-pretty">
              Um canal de conteúdo médico criterioso — não divulgação genérica nem
              infotainment de saúde. É raciocínio clínico exposto com método: o
              mesmo critério que governa o atendimento governa o que vai pro feed.
            </p>

            {/* PLACEHOLDER: ajustar proposta de valor do canal antes de publicar */}
            <p className="max-w-xl text-base leading-relaxed text-azlo-slate text-pretty">
              O objetivo é construir uma audiência que pensa sobre medicina, não
              apenas que consome conteúdo médico. Médicos, estudantes e
              profissionais que querem mais do que uma lista de sintomas.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-md bg-azlo-navy px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-azlo-blue"
              aria-label="Acessar canal @dr.lorencato no Instagram"
            >
              <InstagramIcon />
              Seguir @dr.lorencato
            </a>
          </Reveal>

          {/* Escada de evidência */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-xl border border-azlo-line bg-white p-6 md:p-7">
              <p className="text-eyebrow font-semibold uppercase text-azlo-teal-ink">
                Escada de evidência
              </p>
              <ol className="mt-6 flex flex-col gap-5">
                {escada.map(({ nome, w }) => (
                  <li key={nome} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-azlo-navy">
                      {nome}
                    </span>
                    <span
                      aria-hidden="true"
                      className="block h-1.5 rounded-full"
                      style={{
                        width: `${w}%`,
                        background:
                          "linear-gradient(90deg, #00AFCB, rgba(0,175,203,0.12))",
                      }}
                    />
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-azlo-line pt-4 text-xs leading-relaxed text-azlo-muted">
                Todo conteúdo declara em que degrau está — fato, inferência ou
                opinião operacional. Sem misturar os três.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Temas recorrentes — regras finas */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {temas.map(({ titulo, descricao }, i) => (
            <Reveal key={titulo} delay={i * 100}>
              <div className="border-t border-azlo-navy/20 pt-5">
                <h3 className="font-display text-lg font-semibold text-azlo-navy">
                  {titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-azlo-slate">
                  {descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Fórmula editorial — Brand Book v4 */}
        <Reveal className="mt-16">
          <div className="rounded-xl border border-azlo-line bg-white p-6 md:p-7">
            <p className="text-eyebrow font-semibold uppercase text-azlo-teal-ink">
              Fórmula editorial
            </p>
            <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
              {formula.map((passo, i) => (
                <li key={passo} className="flex items-center gap-2">
                  <span className="rounded-md border border-azlo-line bg-azlo-ice px-3 py-1.5 text-sm font-medium text-azlo-navy">
                    {passo}
                  </span>
                  {i < formula.length - 1 && (
                    <span aria-hidden="true" className="text-azlo-teal">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
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
