import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/site/Icons";
import { SectionIntro } from "@/components/site/SectionIntro";
import { TeamCard } from "@/components/site/TeamCard";
import { principles, team } from "@/data/site";

export const metadata: Metadata = {
  title: "Método e time",
  description: "Como a AZLO pensa, constrói e mantém sistemas com contexto técnico e revisão humana.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--navy">
        <div className="site-frame">
          <p className="eyebrow eyebrow--light"><span />Método & time</p>
          <h1>Projetar para a realidade é uma escolha de engenharia.</h1>
          <p>A AZLO trabalha entre software, infraestrutura, dados e saúde sem transformar complexidade em slogan. A medida é simples: o sistema precisa ser entendível, operável e responsável.</p>
        </div>
      </section>
      <section className="section methodology">
        <div className="site-frame methodology__layout">
          <div><p className="eyebrow"><span />Método</p><h2>Do cenário ao sistema, em etapas que podem ser examinadas.</h2></div>
          <ol className="methodology__steps">
            <li><span>01</span><div><h3>Diagnosticar</h3><p>Fazer perguntas sobre processo, restrição, segurança, dados, dependência e impacto antes de escolher uma ferramenta.</p></div></li>
            <li><span>02</span><div><h3>Construir com limite</h3><p>Separar o que é automação, o que é apoio à decisão e o que continua sob responsabilidade direta de uma pessoa.</p></div></li>
            <li><span>03</span><div><h3>Operar e revisar</h3><p>Documentar, observar e iterar para que a entrega sobreviva ao ambiente em que foi instalada.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="section principles">
        <div className="site-frame"><SectionIntro eyebrow="Critérios" title={<>O que não abrimos mão ao desenhar <em>tecnologia aplicada.</em></>} align="start" /><div className="principles-grid">{principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div>
      </section>
      <section className="section team-section">
        <div className="site-frame"><SectionIntro eyebrow="Equipe" title={<>Pessoas atuais e as posições que podem <em>ampliar a equipe.</em></>} text="Os cards com a marca “Expanding the team” são posições futuras, não integrantes confirmados." /><div className="team-grid">{team.map((member) => <TeamCard key={`${member.name}-${member.role}`} member={member} />)}</div><Link className="section-link" href="/contato">Falar com a AZLO <ArrowRightIcon /></Link></div>
      </section>
    </main>
  );
}
