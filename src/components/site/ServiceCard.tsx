import { ArrowUpRightIcon } from "./Icons";
import type { Service } from "@/data/site";
import { site } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  const subject = encodeURIComponent(`${service.nextStep} — AZLO`);

  return (
    <article className="service-card">
      <div className="service-card__head">
        <span className="service-card__number">{service.index}</span>
        <p>{service.problem}</p>
      </div>
      <h3>{service.title}</h3>
      <p className="service-card__intervention">{service.intervention}</p>
      <ul aria-label={`Capacidades em ${service.title}`}>
        {service.capabilities.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <a className="service-card__cta" href={`mailto:${site.email}?subject=${subject}`}>
        {service.nextStep} <ArrowUpRightIcon />
      </a>
    </article>
  );
}
