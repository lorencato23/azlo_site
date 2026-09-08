import { Reveal } from "@/components/Reveal";
import { DivisionCard } from "@/components/ui/DivisionCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const divisions = [
  {
    name: "AZLO Health",
    tier: 1 as const,
    status: "ativa" as const,
    tagline: "Onde a clínica encontra o sistema.",
    description:
      "Frente ativa. Prática clínica, protocolos e handbooks — conteúdo real e recorrente. O método aplicado ao cuidado direto do paciente.",
    accent: "#00AFCB", // Arc Teal
    accentInk: "#056072",
    meta: [
      ["Status", "frente pública inicial"],
      ["Critério", "consulta, rotina, revisão"],
    ] as [string, string][],
  },
  {
    name: "AZLO Labs",
    tier: 2 as const,
    status: "em-construcao" as const,
    tagline: "Ferramentas que executam o método.",
    description:
      "Em construção. Automações e ferramentas técnicas que tornam o método replicável e mensurável. Uso interno até amadurecer para terceiros.",
    accent: "#35D3E6", // Vital Cyan
    accentInk: "#0A6E85",
    meta: [
      ["Status", "camada técnica"],
      ["Critério", "produto antes de palco"],
    ] as [string, string][],
  },
  {
    name: "AZLO Education",
    tier: 3 as const,
    status: "reservada" as const,
    tagline: "Conhecimento estruturado, não improvisado.",
    description:
      "Reservada. Território de ensino e formação médica reservado no papel — retomado quando houver curso publicado.",
    accent: "#0A5E9C", // Zenith Blue
    accentInk: "#0A5E9C",
    meta: [
      ["Status", "território futuro"],
      ["Critério", "clareza pedagógica"],
    ] as [string, string][],
  },
  {
    name: "AZLO Science",
    tier: 3 as const,
    status: "reservada" as const,
    tagline: "Evidência antes de opinião.",
    description:
      "Reservada. Interpretação e comunicação de evidência científica — ativada com submissão ou publicação regular.",
    accent: "#052B57", // Deep Navy
    accentInk: "#052B57",
    meta: [
      ["Status", "linha editorial"],
      ["Critério", "evidência rastreável"],
    ] as [string, string][],
  },
];

export function Divisoes() {
  return (
    <section
      id="divisoes"
      className="border-t border-azlo-line bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-container">
        <Reveal className="max-w-2xl">
          <SectionLabel>03 · Arquitetura de marca</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-semibold text-azlo-navy text-balance">
            Uma marca-mãe. Frentes em maturidades diferentes.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-azlo-slate text-pretty">
            AZLO é uma marca-guarda-chuva que empresta princípios, voz e sistema
            visual a quatro divisões — mas o esforço segue a realidade, não a
            ambição. Só Health está operacional. As demais existem por critério,
            sem inflar o que ainda não foi construído.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {divisions.map((division, i) => (
            <Reveal key={division.name} delay={i * 90} className="h-full">
              <DivisionCard {...division} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
