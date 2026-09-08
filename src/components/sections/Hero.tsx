import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const frentes = [
  { name: "Health", note: "ativa", active: true },
  { name: "Labs", note: "em construção", active: false },
  { name: "Education", note: "reservada", active: false },
  { name: "Science", note: "reservada", active: false },
];

const etapas = [
  { n: "01", nome: "Diagnosticar", status: "concluído", state: "done" },
  { n: "02", nome: "Priorizar", status: "concluído", state: "done" },
  { n: "03", nome: "Intervir", status: "em curso", state: "active" },
  { n: "04", nome: "Revisar", status: "agendado", state: "queued" },
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-azlo-navy px-6 pb-20 pt-32 md:pb-28 md:pt-44"
    >
      {/* grade técnica + arco orbital + brilho — decorativos */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(0,175,203,0.16),transparent_62%)]"
      />
      <OrbitArc className="absolute -right-24 top-8 -z-10 hidden h-[38rem] w-[38rem] text-azlo-teal/20 lg:block" />

      <div className="mx-auto grid w-full max-w-container items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Copy principal */}
        <Reveal className="flex flex-col gap-7 lg:col-span-7">
          <SectionLabel tone="dark">AZLO · Clinical Systems Studio</SectionLabel>

          <h1 className="font-display text-display-2xl font-semibold text-white text-balance">
            Medicina com método.
            <br />
            <span className="text-azlo-cyan">Sistemas com critério.</span>
          </h1>

          {/* Subheadline institucional (Brand Book v4 — mensagens-chave) */}
          <p className="max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
            A AZLO integra diagnóstico, método, indicadores e tecnologia para
            transformar progresso em sistema — da prática clínica à engenharia de
            rotina. Menos promessa milagrosa, mais engenharia de método.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-azlo-teal px-6 text-sm font-semibold text-azlo-navy transition-all hover:-translate-y-0.5 hover:bg-azlo-cyan"
            >
              Começar pelo diagnóstico
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="#metodo"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-azlo-cyan/60 hover:bg-white/5"
            >
              Ver método
            </a>
          </div>

          {/* Frentes — status por divisão */}
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            {frentes.map(({ name, note, active }) => (
              <li key={name} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    active ? "bg-azlo-teal" : "bg-white/30"
                  }`}
                />
                <span className="text-sm font-medium text-white">{name}</span>
                <span className="text-xs text-white/50">{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Cockpit — ciclo de decisão clínica */}
        <Reveal delay={150} className="lg:col-span-5">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm md:p-7"
            aria-label="Painel ilustrativo do ciclo de decisão AZLO"
          >
            {/* varredura sutil + marca-d'água do símbolo real */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/4 animate-sheen bg-gradient-to-b from-transparent via-azlo-cyan/10 to-transparent"
            />
            <img
              src="/logos/azlo-symbol-real-white.png"
              alt=""
              aria-hidden="true"
              width={350}
              height={355}
              className="pointer-events-none absolute -bottom-16 -right-14 w-64 opacity-[0.06]"
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                  AZLO OS
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Ciclo de decisão clínica
                </p>
              </div>
              <span className="rounded border border-azlo-cyan/30 bg-azlo-cyan/10 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-azlo-cyan">
                em validação
              </span>
            </div>

            {/* Score + curva de resposta */}
            <div className="mt-6 grid grid-cols-[auto_1fr] items-end gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                  aderência
                </p>
                <p className="mt-2 font-display text-5xl font-semibold leading-none text-white md:text-6xl">
                  84<span className="text-2xl text-azlo-cyan">%</span>
                </p>
              </div>
              <svg viewBox="0 0 160 60" className="h-14 w-full" fill="none" aria-hidden="true">
                <path d="M2 50 H158" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <path
                  d="M2 46 C22 22, 40 30, 58 34 S92 44, 112 22 S140 16, 158 8"
                  stroke="#35D3E6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="158" cy="8" r="3" fill="#35D3E6" />
              </svg>
            </div>

            {/* Etapas do ciclo com status */}
            <ul className="mt-5 flex flex-col">
              {etapas.map(({ n, nome, status, state }) => (
                <li
                  key={n}
                  className="flex items-center justify-between border-b border-white/[0.08] py-2.5 last:border-0"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-5 text-[0.65rem] font-semibold text-white/30">
                      {n}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        state === "queued" ? "text-white/45" : "text-white"
                      }`}
                    >
                      {nome}
                    </span>
                  </span>
                  <span
                    className={`flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] ${
                      state === "active"
                        ? "text-azlo-cyan"
                        : state === "done"
                          ? "text-white/45"
                          : "text-white/30"
                    }`}
                  >
                    {status}
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        state === "done"
                          ? "bg-azlo-teal"
                          : state === "active"
                            ? "animate-orbit-pulse bg-azlo-cyan"
                            : "border border-white/30"
                      }`}
                    />
                  </span>
                </li>
              ))}
            </ul>

            {/* Protocolo — a régua do método */}
            <div className="mt-5 grid grid-cols-4 border-t border-white/10 pt-4">
              {["hipótese", "métrica", "risco", "revisão"].map((t) => (
                <span
                  key={t}
                  className="text-center text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-azlo-cyan/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OrbitArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path
        d="M50 200 A150 150 0 0 1 200 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* estrela-guia no ápice (anatomia do símbolo AZLO) */}
      <path
        d="M200 34 L206 62 L234 68 L206 74 L200 102 L194 74 L166 68 L194 62 Z"
        fill="currentColor"
        className="animate-orbit-pulse"
        style={{ transformOrigin: "200px 68px" }}
      />
    </svg>
  );
}

function ArrowIcon() {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
