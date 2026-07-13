const year = new Date().getFullYear();

export function ExperienceFooter() {
  return (
    <footer className="experience-footer">
      <div className="experience-shell experience-footer__main">
        <a className="experience-footer__brand" href="#inicio" aria-label="AZLO — voltar ao início">
          <img src="/logos/azlo-symbol-real-white.png" alt="" width="350" height="355" />
          <span>AZLO</span>
        </a>
        <p>Alpha Zenith Life Optimization</p>
        <nav aria-label="Links do rodapé">
          <a href="#movimento">Em movimento</a>
          <a href="#frentes">Frentes</a>
          <a href="#metodo">Método</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div className="experience-shell experience-footer__base">
        <span>© {year} AZLO</span>
        <span>Health · Technology · Education · Science</span>
        <span>Built with direction.</span>
      </div>
    </footer>
  );
}
