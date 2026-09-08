import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, LayerIcon, MailIcon } from "@/components/site/Icons";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionIntro } from "@/components/site/SectionIntro";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TeamCard } from "@/components/site/TeamCard";
import { principles, projects, services, site, team } from "@/data/site";

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="site-frame hero__layout">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light"><span />AZLO · systems studio</p>
            <h1>IA, infraestrutura e software <em>onde o trabalho acontece.</em></h1>
            <p className="hero__lead">
              Projetamos e integramos sistemas para organizações que precisam de tecnologia aplicada ao fluxo real, à infraestrutura disponível e à decisão humana.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/servicos">Explorar serviços <ArrowRightIcon /></Link>
              <Link className="button button--secondary" href="/projetos">Ver projetos selecionados</Link>
            </div>
            <dl className="hero__facts">
              <div><dt>Escopo</dt><dd>IA · dados · automação</dd></div>
              <div><dt>Ambiente</dt><dd>Cloud · VPS · infraestrutura privada</dd></div>
              <div><dt>Princípio</dt><dd>Contexto antes de ferramenta</dd></div>
            </dl>
          </div>

          <div className="system-map" role="img" aria-label="Diagrama ilustrativo: fluxos de trabalho entram em uma camada de engenharia que integra sistemas, dados, infraestrutura e revisão humana.">
            <div className="system-map__header"><span>AZLO / SYSTEM MAP</span><i>01</i></div>
            <div className="system-map__canvas">
              <div className="system-map__origin"><span>01</span><strong>Fluxo real</strong><small>Pessoas, rotinas e restrições</small></div>
              <div className="system-map__origin"><span>02</span><strong>Dados e sistemas</strong><small>Fontes, integrações e contexto</small></div>
              <div className="system-map__core"><LayerIcon /><strong>Engenharia aplicada</strong><small>IA · software · infraestrutura</small></div>
              <div className="system-map__outcome"><span>03</span><strong>Operação mais clara</strong><small>Automação com revisão humana</small></div>
              <svg className="system-map__paths" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
                <path d="M100 110 C 230 110 200 180 300 210" />
                <path d="M100 300 C 220 300 220 245 300 210" />
                <path d="M345 210 C 435 210 425 210 510 210" />
                <circle cx="300" cy="210" r="4" />
                <circle cx="510" cy="210" r="4" />
              </svg>
            </div>
            <div className="system-map__footer"><span><i /> Sinal técnico, não promessa genérica</span><span>AZLO 2026</span></div>
          </div>
        </div>
      </section>

      <section className="section section--paper" id="servicos">
        <div className="site-frame">
          <SectionIntro
            eyebrow="Capacidades"
            title={<>Engenharia que entra no sistema, <em>não fica na apresentação.</em></>}
            text="A AZLO combina diagnóstico técnico, construção e integração. O ponto de partida é o problema operacional e o contexto de quem vai manter o sistema depois."
          />
          <div className="service-grid">
            {services.map((service) => <ServiceCard key={service.index} service={service} />)}
          </div>
          <Link className="section-link" href="/servicos">Conhecer escopos de atuação <ArrowRightIcon /></Link>
        </div>
      </section>

      <section className="section section--navy" id="projetos">
        <div className="site-frame">
          <SectionIntro
            eyebrow="Projetos selecionados"
            invert
            title={<>Tecnologia em diferentes estágios. <em>Status explícito em cada caso.</em></>}
            text="Produtos, contribuições técnicas e sistemas em evolução. Sem métricas inventadas, previews privados ou capacidades que ainda não foram verificadas."
          />
          <div className="project-grid project-grid--featured">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} compact />)}
          </div>
          <div className="project-cta-row">
            <p>Veja o portfólio completo, os limites de cada iniciativa e os casos que podem ser descritos publicamente.</p>
            <Link className="button button--outline-light" href="/projetos">Todos os projetos <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section methodology" id="metodo">
        <div className="site-frame methodology__layout">
          <div>
            <p className="eyebrow"><span />Modo de trabalho</p>
            <h2>O projeto avança quando a decisão deixa de ser abstrata.</h2>
            <p className="methodology__lead">Uma sequência curta para reduzir ruído, preservar restrições e transformar um problema em sistema operável.</p>
          </div>
          <ol className="methodology__steps">
            <li><span>01</span><div><h3>Ler o ambiente</h3><p>Mapear fluxo, infraestrutura, dados, dependências e pontos onde uma mudança pode criar mais atrito do que benefício.</p></div></li>
            <li><span>02</span><div><h3>Desenhar a intervenção</h3><p>Definir o que será automatizado, o que precisa de integração e onde o controle humano permanece.</p></div></li>
            <li><span>03</span><div><h3>Validar em operação</h3><p>Construir, observar, corrigir e documentar a passagem de uma solução possível para uma solução utilizável.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section principles">
        <div className="site-frame">
          <SectionIntro
            eyebrow="Critérios"
            title={<>Sofisticação técnica só importa quando aumenta a <em>capacidade de operar.</em></>}
            align="start"
          />
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section" id="time">
        <div className="site-frame">
          <SectionIntro
            eyebrow="Pessoas"
            title={<>Uma equipe em construção, com <em>responsabilidades claras.</em></>}
            text="Os três primeiros perfis representam a equipe atual. As três posições seguintes estão explicitamente sinalizadas como expansões em discussão."
          />
          <div className="team-grid">
            {team.map((member) => <TeamCard key={`${member.name}-${member.role}`} member={member} />)}
          </div>
        </div>
      </section>

      <section className="contact-band" id="contato">
        <div className="site-frame contact-band__layout">
          <div>
            <p className="eyebrow eyebrow--light"><span />Contato</p>
            <h2>Comece pelo problema que está travando a operação.</h2>
          </div>
          <div>
            <p>Conte o contexto, o sistema envolvido e o tipo de resultado que precisa acontecer. A primeira conversa serve para entender escopo, não para vender uma solução pronta.</p>
            <a className="contact-band__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}>
              <MailIcon /><span>{site.email}</span><ArrowUpRightIcon />
            </a>
            <small>Não envie dados clínicos, credenciais ou informações pessoais sensíveis por e-mail.</small>
          </div>
        </div>
      </section>
    </main>
  );
}
