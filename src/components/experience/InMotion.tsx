const streams = [
  {
    index: "01",
    title: "Sistemas de conhecimento",
    text: "Estruturas que transformam informação dispersa em materiais claros, navegáveis e úteis.",
    tag: "organização",
  },
  {
    index: "02",
    title: "Software e automação",
    text: "Ferramentas compactas para reduzir atrito em estudo, pesquisa e operação cotidiana.",
    tag: "execução",
  },
  {
    index: "03",
    title: "Pesquisa e comunicação",
    text: "Conteúdo que mantém fonte, contexto e incerteza visíveis enquanto traduz complexidade.",
    tag: "evidência",
  },
];

export function InMotion() {
  return (
    <section className="motion-section" id="movimento">
      <div className="experience-shell">
        <div className="motion-section__intro">
          <p className="experience-kicker experience-kicker--light"><span>Agora</span> Em movimento</p>
          <h2>O trabalho já começou.</h2>
          <p>
            A AZLO avança pela prática: organiza conhecimento, desenvolve ferramentas e testa formas melhores de aprender, decidir e construir.
          </p>
        </div>

        <div className="motion-streams">
          {streams.map((stream) => (
            <article className="motion-stream" key={stream.index}>
              <span className="motion-stream__index">{stream.index}</span>
              <div>
                <h3>{stream.title}</h3>
                <p>{stream.text}</p>
              </div>
              <span className="motion-stream__tag">{stream.tag}</span>
              <span className="motion-stream__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
