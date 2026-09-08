import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const etapas = [
  {
    n: "01",
    nome: "Diagnosticar",
    desc: "Mapear a realidade clínica, a rotina e as restrições. Definir o ponto de partida antes de qualquer conduta.",
    meta: "entrada · contexto",
  },
  {
    n: "02",
    nome: "Priorizar",
    desc: "Separar impacto, viabilidade, risco e custo. Decidir o que merece intervenção agora — e o que espera.",
    meta: "filtro · decisão",
  },
  {
    n: "03",
    nome: "Intervir",
    desc: "Converter a decisão em conduta, protocolo, rotina ou ferramenta — sempre com critério explícito.",
    meta: "saída · protocolo",
  },
  {
    n: "04",
    nome: "Revisar",
    desc: "Medir resposta, aderência e custo. Ajustar o próximo ciclo. O método é contínuo, não pontual.",
    meta: "ritmo · revisão",
  },
];

/**
 * Método em linhas tipográficas — padrão de regras finas do Brand Book v4,
 * no lugar de cards genéricos. O número serifado é o protagonista.
 */
export function Metodo() {
  return (
    <section
      id="metodo"
      className="border-t border-azlo-line bg-azlo-ice px-6 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-container">
        <Reveal className="max-w-2xl">
          <SectionLabel>02 · Método operacional</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-semibold text-azlo-navy text-balance">
            Do diagnóstico ao ajuste contínuo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-azlo-slate text-pretty">
            Um único método atravessa cada domínio que a marca toca: medir,
            priorizar, intervir, revisar. Cada intervenção precisa ter hipótese
            clara, métrica acompanhável e ciclo curto de revisão.
          </p>
        </Reveal>

        <ol className="mt-14">
          {etapas.map(({ n, nome, desc, meta }, i) => (
            <Reveal
              key={n}
              as="li"
              delay={i * 80}
              className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-x-5 gap-y-1 border-t border-azlo-navy/15 py-7 last:border-b md:grid-cols-[7rem_1fr_auto] md:gap-x-8 md:py-9"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl font-semibold leading-none text-azlo-navy/15 transition-colors duration-300 group-hover:text-azlo-teal md:text-6xl"
              >
                {n}
              </span>

              <div>
                <h3 className="font-display text-2xl font-semibold text-azlo-navy">
                  {nome}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-azlo-slate md:text-base">
                  {desc}
                </p>
              </div>

              <span className="col-start-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-azlo-muted md:col-start-3 md:justify-self-end">
                {meta}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
