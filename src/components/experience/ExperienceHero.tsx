import { SignalField } from "./SignalField";

const signals = ["HEALTH", "TECHNOLOGY", "EDUCATION", "SCIENCE", "SYSTEMS", "EVIDENCE"];

export function ExperienceHero() {
  return (
    <section className="experience-hero" id="inicio">
      <div className="experience-hero__grid" aria-hidden="true" />
      <div className="experience-hero__glow" aria-hidden="true" />

      <div className="experience-shell experience-hero__layout">
        <div className="experience-hero__copy">
          <p className="experience-kicker"><span>AZLO</span> Health · Technology · Education · Science</p>
          <h1>Ideias que<br /><em>ganham <span>forma.</span></em></h1>
          <p className="experience-hero__lead">
            Conhecimento complexo, organizado em sistemas, ferramentas e experiências úteis.
          </p>
          <div className="experience-hero__actions">
            <a className="experience-button experience-button--solid" href="#movimento">
              Ver o que está em movimento <Arrow />
            </a>
            <a className="experience-button experience-button--ghost" href="#frentes">Explorar frentes</a>
          </div>
          <div className="experience-hero__status">
            <span className="experience-live-dot" aria-hidden="true" />
            Projetos, conteúdo e experimentos já em movimento.
          </div>
        </div>

        <div className="experience-hero__visual">
          <SignalField />
        </div>
      </div>

      <div className="signal-marquee" aria-hidden="true">
        <div>
          {[...signals, ...signals].map((signal, index) => (
            <span key={`${signal}-${index}`}>{signal}<i>✦</i></span>
          ))}
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
