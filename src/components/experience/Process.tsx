const steps = [
  {
    index: "01",
    verb: "Observar",
    text: "Entender contexto, restrições e o que realmente precisa mudar.",
    meta: "contexto / sinal",
  },
  {
    index: "02",
    verb: "Estruturar",
    text: "Organizar relações, fontes e critérios até o problema ficar legível.",
    meta: "arquitetura / critério",
  },
  {
    index: "03",
    verb: "Construir",
    text: "Transformar conhecimento em material, ferramenta ou experiência utilizável.",
    meta: "protótipo / uso",
  },
  {
    index: "04",
    verb: "Evoluir",
    text: "Observar o uso, corrigir o que falha e ampliar somente o que funciona.",
    meta: "feedback / revisão",
  },
];

export function Process() {
  return (
    <section className="process-section" id="metodo">
      <div className="experience-shell process-section__layout">
        <div className="process-section__intro">
          <p className="experience-kicker experience-kicker--light"><span>Método</span> Alpha → Zenith</p>
          <h2>Movimento<br />com direção.</h2>
          <p>Inovação sem critério é ruído. O método mantém a ambição conectada ao uso real.</p>
          <div className="process-section__vector" aria-hidden="true">
            <span>ALPHA</span><i /><span>ZENITH</span>
          </div>
        </div>

        <ol className="process-steps">
          {steps.map((step) => (
            <li key={step.index}>
              <span className="process-step__index">{step.index}</span>
              <div>
                <h3>{step.verb}</h3>
                <p>{step.text}</p>
              </div>
              <small>{step.meta}</small>
              <span className="process-step__beam" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
