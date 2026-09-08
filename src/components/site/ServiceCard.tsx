import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <span className="service-card__number">{service.index}</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul>
        {service.deliverables.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
