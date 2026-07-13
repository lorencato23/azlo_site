const capabilities = {
  icg: ["Busca local", "Histórico", "Status editorial"],
  ankinator: ["Curadoria humana", "Fonte rastreável", "Exportação .apkg"],
  analytics: ["Leitura read-only", "Tendências longitudinais", "Sinais por deck e tag"],
};

export function SelectedWork() {
  return (
    <section className="work-section" id="projetos" aria-labelledby="work-title">
      <div className="experience-shell">
        <header className="work-section__intro">
          <p className="experience-kicker experience-kicker--light">
            <span>Projetos</span> Evidência em uso
          </p>
          <h2 id="work-title">Trabalho que já ganhou forma.</h2>
          <p>
            Três projetos, uma mesma disciplina: transformar informação em consulta, decisão e aprendizado sem esconder limites ou retirar o humano do processo.
          </p>
        </header>

        <div className="work-reel">
          <article className="work-case work-case--icg">
            <ProjectMeta index="01" domains="Health × Technology" status="MVP funcional · piloto privado" />
            <div className="work-case__copy">
              <p className="work-case__name">Individual Clinical Guide</p>
              <h3>Consulta clínica individual, sem depender da internet.</h3>
              <p>
                Um guia offline-first que transforma materiais dispersos em uma biblioteca pesquisável, navegável e auditável — sem armazenar dados de pacientes ou automatizar decisões clínicas.
              </p>
              <CapabilityList items={capabilities.icg} />
              <small>Preview anonimizado. Conteúdo clínico real não é exibido.</small>
            </div>
            <IcgPreview />
          </article>

          <article className="work-case work-case--ankinator work-case--reverse">
            <ProjectMeta index="02" domains="Education × Technology" status="Ferramenta operacional · uso local" />
            <div className="work-case__copy">
              <p className="work-case__name">Ankinator</p>
              <h3>Automação propõe. O estudante decide.</h3>
              <p>
                Uma estação local de curadoria para revisar, editar e selecionar cartões antes que eles ocupem espaço no Anki.
              </p>
              <CapabilityList items={capabilities.ankinator} />
              <small>Interface representada com um cartão demonstrativo neutro.</small>
            </div>
            <AnkinatorPreview />
          </article>

          <article className="work-case work-case--analytics">
            <ProjectMeta index="03" domains="Education × Data" status="Pipeline funcional · dados locais" />
            <div className="work-case__copy">
              <p className="work-case__name">Anki Analytics</p>
              <h3>Do histórico de revisão à decisão de estudo.</h3>
              <p>
                Um pipeline read-only que transforma o revlog em tendências de retenção, carga, fluência e cards problemáticos — sem interferir no scheduler.
              </p>
              <CapabilityList items={capabilities.analytics} />
              <small>Visualização demonstrativa. Nenhum dado pessoal é publicado.</small>
            </div>
            <AnalyticsPreview />
          </article>
        </div>
      </div>
    </section>
  );
}

function ProjectMeta({ index, domains, status }: { index: string; domains: string; status: string }) {
  return (
    <div className="work-case__meta">
      <span>{index}</span>
      <p>{domains}</p>
      <small>{status}</small>
    </div>
  );
}

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="work-case__capabilities" aria-label="Recursos implementados">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function IcgPreview() {
  return (
    <div className="work-preview work-preview--icg" role="img" aria-label="Preview anonimizado do Individual Clinical Guide com busca, categorias e módulos em revisão">
      <div className="icg-preview__topbar">
        <span className="icg-preview__mark">+</span>
        <div><small>INDIVIDUAL CLINICAL GUIDE</small><strong>Guia clínico individual</strong></div>
        <em>PREVIEW ANONIMIZADO</em>
      </div>
      <div className="icg-preview__body">
        <aside>
          <strong>Início</strong>
          <small>CATEGORIAS</small>
          <span>Consulta rápida</span>
          <span>Modelos</span>
          <span>Referências</span>
          <i>Conteúdo em revisão</i>
        </aside>
        <div className="icg-preview__content">
          <div className="icg-preview__search">⌕&nbsp;&nbsp; Buscar condição, termo ou medicamento...</div>
          <div className="icg-preview__message"><small>CONSULTA OFFLINE</small><strong>Encontre. Consulte. Rastreie.</strong><span>Informação organizada para acesso rápido e revisão explícita.</span></div>
          <div className="icg-preview__modules">
            {["Módulo 01", "Módulo 02", "Módulo 03"].map((label) => (
              <div key={label}><small>EM REVISÃO</small><strong>{label}</strong><span>Consultar →</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnkinatorPreview() {
  return (
    <div className="work-preview work-preview--ankinator" role="img" aria-label="Preview demonstrativo do Ankinator com pergunta, resposta, fonte e ações de curadoria">
      <div className="ankinator-preview__bar"><strong>ANKINATOR</strong><span>CURADORIA LOCAL</span><i>LOTE DEMONSTRATIVO</i></div>
      <div className="ankinator-preview__progress"><span>PROGRESSO DA CURADORIA</span><i /></div>
      <div className="ankinator-preview__workspace">
        <aside>
          <small>RESUMO</small>
          <span className="accepted">ACEITOS</span>
          <span className="rejected">REJEITADOS</span>
          <span className="pending">PENDENTES</span>
          <em>Fonte preservada</em>
        </aside>
        <div className="ankinator-preview__card">
          <small>PERGUNTA</small>
          <strong>Este cartão merece entrar no deck?</strong>
          <small>RESPOSTA</small>
          <p>A decisão final permanece com quem estuda.</p>
          <div>FONTE&nbsp;&nbsp; Seção demonstrativa · trecho rastreável</div>
          <div className="ankinator-preview__actions">
            <span>✓ Aceitar</span><span>× Rejeitar</span><span>✎ Editar</span><span>→ Depois</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="work-preview work-preview--analytics" role="img" aria-label="Visualização demonstrativa do Anki Analytics com trajetória de retenção, carga e lapses">
      <div className="analytics-preview__header">
        <div><small>ANKI ANALYTICS</small><strong>Trajetória de revisão</strong></div>
        <span>DADOS DEMONSTRATIVOS</span>
      </div>
      <div className="analytics-preview__signals">
        <span><i className="signal-retention" /> Retenção</span>
        <span><i className="signal-load" /> Carga</span>
        <span><i className="signal-lapse" /> Lapses</span>
      </div>
      <div className="analytics-preview__chart">
        <svg viewBox="0 0 720 260" aria-hidden="true" preserveAspectRatio="none">
          <g className="chart-grid">
            <path d="M0 40H720M0 95H720M0 150H720M0 205H720" />
            <path d="M90 0V260M210 0V260M330 0V260M450 0V260M570 0V260M690 0V260" />
          </g>
          <path className="chart-area" d="M0 210 C70 188 92 170 145 179 S250 126 330 142 S430 92 500 112 S610 58 720 72 L720 260 L0 260Z" />
          <path className="chart-line" d="M0 210 C70 188 92 170 145 179 S250 126 330 142 S430 92 500 112 S610 58 720 72" />
          <path className="chart-load" d="M0 224 C85 204 130 216 205 193 S330 215 405 174 S540 187 720 138" />
          <g className="chart-points"><circle cx="145" cy="179" r="5" /><circle cx="330" cy="142" r="5" /><circle cx="500" cy="112" r="5" /><circle cx="720" cy="72" r="5" /></g>
        </svg>
        <div className="analytics-preview__lapses"><span /><span /><span /><span /><span /><span /></div>
      </div>
      <div className="analytics-preview__footer"><span>Sem alterar o scheduler</span><span>Leitura longitudinal</span><span>Privacidade local</span></div>
    </div>
  );
}
