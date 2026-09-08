import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/site/Icons";
import { SectionIntro } from "@/components/site/SectionIntro";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Intervenções em sistemas clínicos, IA integrada, infraestrutura, dados e automação para operações reais.",
  alternates: { canonical: "/servicos" },
  openGraph: { title: "Serviços | AZLO", description: "Intervenções em sistemas clínicos, IA integrada, infraestrutura, dados e automação para operações reais.", url: "/servicos" },
  twitter: { card: "summary_large_image", title: "Serviços | AZLO", description: "Intervenções em sistemas clínicos, IA integrada, infraestrutura, dados e automação para operações reais." },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--navy">
        <div className="site-frame">
          <p className="eyebrow eyebrow--light"><span />Serviços</p>
          <h1>Problemas diferentes. Uma engenharia que começa pelo ambiente.</h1>
          <p>Organizamos a atuação pelo que precisa mudar na operação — e usamos tecnologia como meio, não como produto isolado.</p>
          <Link className="button button--primary page-hero__cta" href="/contato">Descrever um problema <ArrowRightIcon /></Link>
        </div>
      </section>
      <section className="section section--paper">
        <div className="site-frame">
          <SectionIntro eyebrow="Onde entramos" title={<>Quatro fricções, quatro formas de <em>intervir.</em></>} text="A conversa começa pelo fluxo, pela equipe e pelas restrições que tornam uma solução sustentável." align="start" />
          <div className="service-grid service-grid--page">
            {services.map((service) => <ServiceCard key={service.index} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section service-detail">
        <div className="site-frame service-detail__grid">
          <div><p className="eyebrow"><span />Recursos técnicos</p><h2>A ferramenta entra depois da <em>pergunta certa.</em></h2></div>
          <div>
            <p>LLMs, agentes, RAG, bancos vetoriais, APIs, VPS e pipelines fazem parte do repertório. A escolha depende dos dados, permissões, infraestrutura e manutenção que o contexto suporta.</p>
            <ul>
              <li>Integração de IA a workflows existentes</li>
              <li>Implantação em VPS, servidores privados ou hardware próprio</li>
              <li>Automação com logs, limites e pontos de aprovação</li>
            </ul>
            <Link className="section-link" href="/contato">Discutir um contexto técnico <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
