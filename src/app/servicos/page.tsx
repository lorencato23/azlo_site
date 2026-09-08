import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/site/Icons";
import { SectionIntro } from "@/components/site/SectionIntro";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Engenharia de sistemas clínicos, IA integrada, infraestrutura, dados e automação para fluxos reais.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--navy">
        <div className="site-frame">
          <p className="eyebrow eyebrow--light"><span />Serviços</p>
          <h1>Capacidade técnica aplicada ao ambiente que já existe.</h1>
          <p>Do HIS à infraestrutura privada, a AZLO entra no problema para entender dependências, integrar sistemas e deixar uma operação mais clara de manter.</p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="site-frame">
          <SectionIntro eyebrow="Escopo" title={<>Três frentes para transformar restrições em <em>arquitetura utilizável.</em></>} align="start" />
          <div className="service-grid service-grid--page">
            {services.map((service) => <ServiceCard key={service.index} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section service-detail">
        <div className="site-frame service-detail__grid">
          <div><p className="eyebrow"><span />Como a IA entra</p><h2>Não é uma camada genérica sobre o seu processo.</h2></div>
          <div>
            <p>Modelos, agentes, RAG, bancos vetoriais, APIs e pipelines só fazem sentido quando há uma decisão concreta sobre dados, permissões, infraestrutura e manutenção.</p>
            <ul>
              <li>Integração de LLMs a workflows existentes</li>
              <li>Implantação em VPS, servidores privados ou hardware do cliente</li>
              <li>Automação desenhada com logs, limites e pontos de aprovação</li>
            </ul>
            <Link className="section-link" href="/contato">Discutir um contexto técnico <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
