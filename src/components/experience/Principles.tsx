const principles = [
  {
    index: "01",
    title: "Evidência visível",
    text: "Fonte, contexto e incerteza fazem parte da entrega. Não ficam escondidos atrás da confiança do texto.",
  },
  {
    index: "02",
    title: "Tecnologia com função",
    text: "IA e software entram quando melhoram o processo, a compreensão ou a autonomia de quem usa.",
  },
  {
    index: "03",
    title: "Complexidade traduzida",
    text: "Simplificar não é empobrecer. É preservar o que importa e retirar o atrito que não acrescenta nada.",
  },
];

export function Principles() {
  return (
    <section className="principles-section">
      <div className="experience-shell">
        <div className="principles-section__statement">
          <p className="experience-kicker experience-kicker--light"><span>Princípios</span> Critério de construção</p>
          <h2>Rigor é o que permite inovar.</h2>
          <p>O visual pode surpreender. A afirmação precisa continuar verdadeira.</p>
        </div>

        <div className="principles-list">
          {principles.map((principle) => (
            <article key={principle.index}>
              <span>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
