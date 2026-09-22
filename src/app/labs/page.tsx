import type { Metadata } from "next";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/site";

export const metadata: Metadata = {
  title: "Labs",
  description: "Sistemas experimentais da AZLO para conhecimento, agentes e infraestrutura.",
  alternates: { canonical: "/labs" },
  openGraph: { title: "AZLO / Labs", description: "Sistemas experimentais da AZLO para conhecimento, agentes e infraestrutura.", url: "/labs" },
};

export default function LabsPage() {
  return (
    <main id="main" className="labs-page">
      <section className="page-hero page-hero--dark"><div className="page-hero__grid" aria-hidden="true" /><div className="site-frame"><p className="breadcrumb mono-label">AZLO / LABS</p><p className="eyebrow eyebrow--light"><span />PRODUCT SYSTEMS</p><h1>Sistemas experimentais para conhecimento, agentes e <em>infraestrutura.</em></h1><p>Labs reúne produtos próprios, sistemas experimentais, R&amp;D e ferramentas internas que amadureceram dentro da AZLO — open source quando aplicável.</p></div></section>
      <section className="section section--light"><div className="site-frame"><div className="section-heading section-heading--split"><div><p className="eyebrow"><span />PRODUCT MATRIX</p><h2>Uma linguagem comum para sistemas em <em>evolução.</em></h2></div><p>Cada item mostra seu domínio, estágio e limite. Nomes de produto continuam subordinados à marca AZLO.</p></div><div className="labs-matrix">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section>
    </main>
  );
}
