import type { TeamMember } from "@/data/site";
import { LinkedInIcon } from "./Icons";

export function TeamCard({ member }: { member: TeamMember }) {
  const label = member.future ? "Posição em discussão" : "Equipe atual";

  return (
    <article className={`team-card ${member.future ? "team-card--future" : ""}`}>
      <div className="team-card__photo" aria-label={member.future ? `Placeholder para ${member.name}` : `Placeholder de foto para ${member.name}`}>
        <span>{member.initials}</span>
        <i aria-hidden="true" />
      </div>
      <div className="team-card__identity">
        <p>{label}</p>
        <h3>{member.name}</h3>
        <strong>{member.role}</strong>
      </div>
      <ul className="team-card__expertise" aria-label={`Especialidades de ${member.name}`}>
        {member.expertise.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {member.linkedin ? (
        <a className="linkedin-link" href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`Abrir LinkedIn de ${member.name} em nova aba`}>
          <LinkedInIcon /> LinkedIn
        </a>
      ) : (
        <span className="team-card__future-note">Estrutura em discussão</span>
      )}
    </article>
  );
}
