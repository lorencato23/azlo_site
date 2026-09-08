import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const principios = [
  {
    n: "01",
    titulo: "Hipótese clara",
    desc: "Antes de intervir, definir qual mecanismo está sendo testado e qual mudança seria significativa.",
  },
  {
    n: "02",
    titulo: "Métrica acompanhável",
    desc: "Transformar percepção, rotina e biomarcadores em sinais que possam orientar decisão.",
  },
  {
    n: "03",
    titulo: "Ciclo curto de validação",
    desc: "Reduzir achismo com cadência de revisão, custo visível e ajuste incremental.",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="border-t border-azlo-line bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-container">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionLabel>01 · Manifesto</SectionLabel>
            <h2 className="mt-5 font-display text-display-xl font-semibold text-azlo-navy text-balance">
              Menos promessa.
              <br />
              Mais sistema.
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5 lg:col-span-6">
            {/* PLACEHOLDER: confirmar apresentação pessoal antes de publicar */}
            <p className="text-lg leading-relaxed text-azlo-slate text-pretty">
              AZLO é a estrutura que organiza a prática e o pensamento do Dr.
              Loren Cato — médico com formação em clínica geral, neurologia,
              neurocirurgia e medicina aeroespacial. Uma marca pessoal, não uma
              clínica tradicional nem um produto de lifestyle.
            </p>
            <p className="text-base leading-relaxed text-azlo-slate text-pretty">
              A marca opera na intersecção entre raciocínio clínico, rotina
              mensurável e alavancagem técnica. Cada intervenção precisa ter
              hipótese, métrica, risco, custo e ciclo de revisão — o que não
              passa por esse filtro não é publicado.
            </p>
          </Reveal>
        </div>

        {/* Princípios — padrão tipográfico de regras finas (Brand Book v4) */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {principios.map(({ n, titulo, desc }, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="border-t-2 border-azlo-navy pt-6">
                <span className="text-eyebrow font-semibold uppercase text-azlo-teal-ink">
                  {n}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-azlo-navy">
                  {titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-azlo-slate">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
