import type { TeamMember } from "@/data/site";
import { LinkedInIcon } from "./Icons";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className={`team-card ${member.future ? "team-card--future" : ""}`}>
      <div className="team-card__photo" aria-label={`Placeholder de foto para ${member.name}`}>
        <span>{member.initials}</span>
        <i aria-hidden="true" />
      </div>
      <div className="team-card__identity">
        <p>{member.future ? "Expanding the team" : "Equipe atual"}</p>
        <h3>{member.name}</h3>
        <strong>{member.role}</strong>
      </div>
      <ul className="team-card__expertise" aria-label={`Especialidades de ${member.name}`}>
        {member.expertise.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {member.linkedin ? (
        <a className="linkedin-link" href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`Abrir LinkedIn de ${member.name} em nova aba`}>
          <LinkedInIcon />
          LinkedIn
        </a>
      ) : (
        <span className="linkedin-link linkedin-link--pending" aria-disabled="true">
          <LinkedInIcon />
          Perfil em breve
        </span>
      )}
    </article>
  );
}
