import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/site/Icons";
import { SectionIntro } from "@/components/site/SectionIntro";
import { TeamCard } from "@/components/site/TeamCard";
import { currentTeam, futureRoles, method } from "@/data/site";

export const metadata: Metadata = {
  title: "Método e time",
  description: "Como a AZLO entende, desenha, constrói e opera sistemas para contextos reais.",
  alternates: { canonical: "/sobre" },
  openGraph: { title: "Método e time | AZLO", description: "Como a AZLO entende, desenha, constrói e opera sistemas para contextos reais.", url: "/sobre" },
  twitter: { card: "summary_large_image", title: "Método e time | AZLO", description: "Como a AZLO entende, desenha, constrói e opera sistemas para contextos reais." },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--navy">
        <div className="site-frame">
          <p className="eyebrow eyebrow--light"><span />Método & time</p>
          <h1>Projetar para a realidade é uma escolha de engenharia.</h1>
          <p>A AZLO trabalha entre software, infraestrutura, dados e saúde. A medida é simples: o sistema precisa ser entendível, operável e responsável.</p>
        </div>
      </section>
      <section className="section methodology">
        <div className="site-frame methodology__layout">
          <div><p className="eyebrow"><span />Método</p><h2>Contexto antes de <em>ferramenta.</em></h2><p className="methodology__lead">Uma sequência curta para transformar um problema em sistema operável.</p></div>
          <ol className="methodology__steps">
            {method.map((item) => <li key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section className="section team-section">
        <div className="site-frame">
          <SectionIntro eyebrow="Equipe" title={<>Pessoas próximas do <em>problema.</em></>} text="Responsabilidades atuais e posições futuras aparecem em blocos distintos." />
          <div className="team-subsection"><p className="eyebrow"><span />Equipe atual</p><div className="team-grid">{currentTeam.map((member) => <TeamCard key={member.name} member={member} />)}</div></div>
          <div className="team-subsection team-subsection--future"><p className="eyebrow"><span />Expansão</p><h2>Posições em discussão para ampliar a capacidade de produto e construção.</h2><div className="team-grid">{futureRoles.map((member) => <TeamCard key={member.name} member={member} />)}</div></div>
          <Link className="section-link" href="/contato">Falar com a AZLO <ArrowRightIcon /></Link>
        </div>
      </section>
    </main>
  );
}
