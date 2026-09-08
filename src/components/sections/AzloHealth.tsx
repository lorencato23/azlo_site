import { StatusBadge } from "@/components/ui/StatusBadge";

const especialidades = [
  {
    nome: "Clínica Geral",
    /* PLACEHOLDER: revisar descrição da especialidade */
    descricao:
      "Avaliação clínica ampla, raciocínio diagnóstico estruturado e acompanhamento longitudinal.",
  },
  {
    nome: "Neurologia",
    /* PLACEHOLDER: revisar descrição da especialidade */
    descricao:
      "Doenças do sistema nervoso central e periférico, com diagnóstico ancorado em semiologia e evidência.",
  },
  {
    nome: "Neurocirurgia",
    /* PLACEHOLDER: revisar descrição da especialidade */
    descricao:
      "Formação cirúrgica em patologias do sistema nervoso. Indicação criteriosa, não intervenção automática.",
  },
];

export function AzloHealth() {
  return (
    <section
      id="health"
      className="relative isolate overflow-hidden bg-azlo-navy px-6 py-24 md:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,175,203,0.14),transparent_65%)]"
      />

      <div className="mx-auto grid w-full max-w-container gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Copy principal */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex items-center gap-3">
            <p className="text-eyebrow font-semibold uppercase text-azlo-cyan">
              04 · AZLO Health — Tier 1
            </p>
            <StatusBadge status="ativa" tone="dark" />
          </div>

          <h2 className="font-display text-display-lg font-semibold text-white text-balance">
            Onde a clínica encontra o sistema.
          </h2>

          {/* PLACEHOLDER: revisar copy de apresentação antes de publicar */}
          <p className="max-w-xl text-base leading-relaxed text-white/70 text-pretty">
            AZLO Health é a frente clínica ativa da marca. O atendimento parte de
            um raciocínio diagnóstico rigoroso — sem atalho de protocolo fixo, sem
            excesso de exame sem hipótese prévia. Cada decisão tem critério
            explícito e um ciclo de revisão.
          </p>

          {/* PLACEHOLDER: confirmar abordagem e diferenciais antes de publicar */}
          <p className="max-w-xl text-base leading-relaxed text-white/70 text-pretty">
            A abordagem é clínica antes de ser especializada. O especialista que
            esquece de ser generalista perde o fio do diagnóstico — aqui os dois
            coexistem.
          </p>

          {/* PLACEHOLDER: confirmar localização e formato de atendimento */}
          <div className="mt-2 flex items-center gap-2 text-sm text-white/55">
            <LocationIcon />
            <span>São José dos Campos, SP</span>
          </div>
        </div>

        {/* Especialidades */}
        <div className="lg:col-span-5 lg:pl-8">
          <p className="text-eyebrow font-semibold uppercase text-white/45">
            Especialidades
          </p>
          <ul className="mt-6 flex flex-col divide-y divide-white/10">
            {especialidades.map(({ nome, descricao }) => (
              <li key={nome} className="flex flex-col gap-1.5 py-5 first:pt-0">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-azlo-teal"
                  />
                  <h3 className="text-base font-semibold text-white">{nome}</h3>
                </div>
                <p className="pl-[1.125rem] text-sm leading-relaxed text-white/55">
                  {descricao}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
