"use client";

import { useState, type CSSProperties } from "react";

const domains = [
  {
    id: "health",
    index: "01",
    name: "Health",
    signal: "clareza",
    title: "Informação em saúde com responsabilidade.",
    text: "Organização de conhecimento, materiais e soluções para contextos de saúde, com fontes rastreáveis e limites explícitos.",
    accent: "#00AFCB",
  },
  {
    id: "labs",
    index: "02",
    name: "Labs",
    signal: "execução",
    title: "Tecnologia que resolve trabalho real.",
    text: "Software, IA e automação aplicados a problemas concretos. A ferramenta aparece quando reduz atrito, não para decorar discurso.",
    accent: "#35D3E6",
  },
  {
    id: "education",
    index: "03",
    name: "Education",
    signal: "autonomia",
    title: "Aprender exige arquitetura.",
    text: "Experiências e materiais que tornam conhecimento complexo mais claro, recuperável e aplicável.",
    accent: "#0A5E9C",
  },
  {
    id: "science",
    index: "04",
    name: "Science",
    signal: "evidência",
    title: "Investigar antes de afirmar.",
    text: "Pesquisa, síntese e comunicação científica com distinção visível entre dado, interpretação e hipótese.",
    accent: "#8BDDE9",
  },
];

export function Domains() {
  const [activeId, setActiveId] = useState(domains[0].id);
  const active = domains.find((domain) => domain.id === activeId) ?? domains[0];

  return (
    <section className="domains-section" id="frentes" style={{ "--domain-accent": active.accent } as CSSProperties}>
      <div className="domains-section__grid" aria-hidden="true" />
      <div className="experience-shell">
        <header className="domains-section__header">
          <p className="experience-kicker experience-kicker--dark"><span>Sistema</span> Quatro frentes</p>
          <h2>O domínio muda.<br />A disciplina permanece.</h2>
          <p>A AZLO conecta campos diferentes por uma mesma forma de pensar: clareza, critério e construção.</p>
        </header>

        <div className="domains-console">
          <div className="domains-console__tabs" role="tablist" aria-label="Frentes AZLO">
            {domains.map((domain) => (
              <button
                key={domain.id}
                type="button"
                role="tab"
                aria-selected={domain.id === activeId}
                aria-controls={`domain-panel-${domain.id}`}
                id={`domain-tab-${domain.id}`}
                className={domain.id === activeId ? "is-active" : ""}
                onClick={() => setActiveId(domain.id)}
                onMouseEnter={() => setActiveId(domain.id)}
              >
                <span>{domain.index}</span>
                <strong>AZLO {domain.name}</strong>
                <small>{domain.signal}</small>
              </button>
            ))}
          </div>

          <div
            key={active.id}
            className="domains-console__panel"
            id={`domain-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`domain-tab-${active.id}`}
          >
            <span className="domains-console__number" aria-hidden="true">{active.index}</span>
            <p>AZLO {active.name}</p>
            <h3>{active.title}</h3>
            <div className="domains-console__rule"><span /></div>
            <p className="domains-console__description">{active.text}</p>
            <span className="domains-console__signal"><i /> signal: {active.signal}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
