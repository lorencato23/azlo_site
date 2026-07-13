const EMAIL = "contato@azlo.com.br";

export function ExperienceContact() {
  return (
    <section className="experience-contact" id="contato">
      <div className="experience-contact__orbit" aria-hidden="true" />
      <div className="experience-shell experience-contact__layout">
        <div>
          <p className="experience-kicker experience-kicker--dark"><span>Contato</span> Próximo movimento</p>
          <h2>Alguns problemas merecem mais do que uma resposta rápida.</h2>
        </div>
        <div className="experience-contact__action">
          <p>
            Se existe um contexto que cruza saúde, tecnologia, educação ou ciência, comece pela parte mais concreta: o problema.
          </p>
          <a href={`mailto:${EMAIL}?subject=Uma%20ideia%20para%20a%20AZLO`}>
            <span>Apresentar um problema</span>
            <strong>{EMAIL}</strong>
            <Arrow />
          </a>
          <small>Não envie dados clínicos ou informações pessoais sensíveis por e-mail.</small>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}
