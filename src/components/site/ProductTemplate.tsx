import Link from "next/link";
import { getProduct, type LabProduct } from "@/data/site";
import { ArrowRightIcon } from "./Icons";
import { Sigil } from "./Sigil";

export function ProductTemplate({ product }: { product: LabProduct }) {
  return (
    <main id="main" className="product-page">
      <section className="product-hero">
        <div className="product-hero__grid" aria-hidden="true" />
        <div className="site-frame product-hero__layout">
          <div>
            <p className="breadcrumb mono-label">AZLO / LABS / {product.name}</p>
            <div className="product-hero__sigil"><Sigil product={product.slug} /></div>
            <p className="eyebrow eyebrow--light"><span />{product.domain}</p>
            <h1>{product.name}</h1>
            <p className="product-hero__title">{product.title}</p>
            <p className="product-hero__description">{product.description}</p>
          </div>
          <aside className="product-hero__status" aria-label={`Estado de ${product.name}`}>
            <span><b>STATUS</b>{product.status}</span>
            {product.version ? <span><b>VERSION</b>{product.version}</span> : null}
            {product.distribution ? <span><b>DISTRIBUTION</b>{product.distribution}</span> : null}
            <span><b>DIVISION</b>AZLO / LABS</span>
          </aside>
        </div>
      </section>

      <section className="product-section product-section--light">
        <div className="site-frame product-section__grid">
          <div><p className="eyebrow"><span />01 / PROBLEM</p><h2>O contexto que o sistema precisa <em>responder.</em></h2></div>
          <p>{product.problem}</p>
        </div>
      </section>
      <section className="product-section product-section--surface">
        <div className="site-frame product-section__grid">
          <div><p className="eyebrow"><span />02 / SYSTEM</p><h2>Uma camada para tornar o trabalho <em>rastreável.</em></h2></div>
          <p>{product.system}</p>
        </div>
      </section>
      <section className="product-section product-architecture">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow eyebrow--light"><span />03 / ARCHITECTURE</p><h2>Peças que sustentam a <em>operação.</em></h2></div><p>Descrição pública limitada ao que está documentado para este sistema.</p></div>
          <ol className="architecture-rail">{product.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}</ol>
        </div>
      </section>
      <section className="product-section product-section--light">
        <div className="site-frame product-section__grid">
          <div><p className="eyebrow"><span />04 / CURRENT STATE</p><h2>Estado atual, sem <em>inferência.</em></h2></div>
          <div>
            <p className="product-state-note">O estágio informa o que o sistema é hoje — não uma promessa de disponibilidade geral.</p>
            {product.currentState ? <ul className="state-list">{product.currentState.map((state) => <li key={state.version}><b>{state.version}</b><span>{state.label}</span></li>)}</ul> : <p className="state-empty">Sem versão pública registrada nesta superfície.</p>}
          </div>
        </div>
      </section>
      <section className="product-section product-section--surface">
        <div className="site-frame product-section__grid">
          <div><p className="eyebrow"><span />05 / ROADMAP</p><h2>Próximos passos dependem de <em>evidência.</em></h2></div>
          <div>{product.roadmap ? <ul className="roadmap-list">{product.roadmap.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul> : <p className="state-empty">Roadmap público ainda não registrado.</p>}</div>
        </div>
      </section>
      <section className="product-section product-related">
        <div className="site-frame">
          <div className="section-heading"><p className="eyebrow eyebrow--light"><span />06 / RELATED SYSTEMS</p><h2>Parte de um sistema <em>maior.</em></h2></div>
          <div className="related-grid">{product.related.map((slug) => <RelatedProduct key={slug} slug={slug} />)}</div>
          <Link className="button button--outline-light product-back" href="/labs">Voltar para AZLO / Labs <ArrowRightIcon /></Link>
        </div>
      </section>
    </main>
  );
}

function RelatedProduct({ slug }: { slug: LabProduct["slug"] }) {
  const product = getProduct(slug);
  if (!product) return null;
  return (
    <Link className="related-product" href={`/labs/${product.slug}`}>
      <Sigil product={product.slug} />
      <span><b>{product.name}</b>{product.title}</span>
      <ArrowRightIcon />
    </Link>
  );
}
