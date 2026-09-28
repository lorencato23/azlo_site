import type { Metadata } from "next";
import { CopyEmailButton } from "@/components/site/CopyEmailButton";
import { ProblemForm } from "@/components/site/ProblemForm";
import { MailIcon, ArrowUpRightIcon } from "@/components/site/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contato", description: "Descreva um problema de IA, infraestrutura, sistemas, dados ou automação para a AZLO.", alternates: { canonical: "/contato" }, openGraph: { title: "Contato | AZLO", description: "Descreva um problema de IA, infraestrutura, sistemas, dados ou automação para a AZLO.", url: "/contato" } };

export default function ContactPage() {
  return (
    <main id="main" className="contact-page">
      <section className="page-hero page-hero--dark contact-hero"><div className="page-hero__grid" aria-hidden="true" /><div className="site-frame contact-page__grid"><div><p className="breadcrumb mono-label">AZLO / CONTATO</p><p className="eyebrow eyebrow--light"><span />COMECE PELO CONTEXTO</p><h1>Descreva o problema. A conversa começa pelo <em>contexto.</em></h1></div><div><p>Se há um processo lento, um sistema difícil de integrar, uma infraestrutura a organizar ou uma hipótese de IA para testar, conte o cenário e o resultado necessário.</p><a className="contact-band__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /><span>Descrever um problema</span><ArrowUpRightIcon /></a><div className="contact-actions"><CopyEmailButton email={site.email} /><small>{site.email} · abre seu cliente de e-mail</small></div><small className="boundary-note">Não envie dados clínicos identificáveis, credenciais, tokens ou informações pessoais sensíveis por e-mail.</small></div></div></section>
      <section className="section section--light contact-form-section"><div className="site-frame contact-form-section__grid"><div><p className="eyebrow"><span />DESCREVER UM PROBLEMA</p><h2>Um primeiro contexto é suficiente para começar.</h2><p>O formulário prepara uma mensagem no seu cliente de e-mail. Não há envio automático nem armazenamento de dados nesta superfície.</p></div><ProblemForm /></div></section>
      <section className="section section--light"><div className="site-frame"><div className="section-heading"><p className="eyebrow"><span />PRIMEIRA MENSAGEM</p><h2>Três sinais para começar uma conversa <em>útil.</em></h2></div><div className="principle-rail principle-rail--light"><article><span>01</span><strong>Contexto</strong><p>Qual operação, equipe ou sistema está envolvido?</p></article><article><span>02</span><strong>Fricção</strong><p>Onde há perda de tempo, risco, retrabalho ou dificuldade de acesso?</p></article><article><span>03</span><strong>Resultado</strong><p>O que precisaria estar diferente para a intervenção fazer sentido?</p></article></div></div></section>
    </main>
  );
}
