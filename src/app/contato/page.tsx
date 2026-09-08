import type { Metadata } from "next";
import { MailIcon } from "@/components/site/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a AZLO sobre IA, infraestrutura, sistemas clínicos, dados e automação.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--navy contact-page">
        <div className="site-frame contact-page__grid">
          <div><p className="eyebrow eyebrow--light"><span />Contato</p><h1>Uma conversa começa melhor com o contexto certo.</h1></div>
          <div><p>Se há um processo lento, um sistema difícil de integrar, uma infraestrutura a organizar ou uma hipótese de IA para testar, descreva o cenário. A AZLO retorna para entender a fronteira técnica antes de propor caminho.</p><a className="contact-band__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /><span>{site.email}</span></a><small>Para sua segurança, não envie dados clínicos, credenciais, tokens ou informações pessoais sensíveis por e-mail.</small></div>
        </div>
      </section>
      <section className="section contact-guidance"><div className="site-frame"><p className="eyebrow"><span />Para começar</p><div className="contact-guidance__grid"><article><span>01</span><h2>Contexto</h2><p>Qual operação, equipe ou sistema está envolvido?</p></article><article><span>02</span><h2>Fricção</h2><p>Onde há perda de tempo, risco, retrabalho ou dificuldade de acesso à informação?</p></article><article><span>03</span><h2>Resultado</h2><p>O que precisaria estar diferente para a intervenção fazer sentido?</p></article></div></div></section>
    </main>
  );
}
