import Link from "next/link";
import { productStatusLabel, type LabProduct } from "@/data/site";
import { ArrowRightIcon } from "./Icons";
import { Sigil } from "./Sigil";

type ProductCardProps = { product: LabProduct; featured?: boolean };

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article className={`product-card ${featured ? "product-card--featured" : ""}`}>
      <div className="product-card__topline">
        <Sigil product={product.slug} />
        <span className="mono-label">{product.domain}</span>
      </div>
      <div className="product-card__identity">
        <p className="product-card__signature">AZLO / LABS / {product.name}</p>
        <h3>{product.name}</h3>
        <p className="product-card__title">{product.title}</p>
      </div>
      <p className="product-card__description">{product.shortDescription}</p>
      <div className="product-card__meta">
        <span><b>ESTADO</b>{productStatusLabel(product.status)}</span>
        {product.version ? <span><b>VERSÃO</b>{product.version}</span> : null}
        {product.distribution ? <span><b>DISTRIBUIÇÃO</b>{product.distribution === "OPEN SOURCE" ? "CÓDIGO ABERTO" : product.distribution}</span> : null}
      </div>
      <Link className="product-card__link" href={`/labs/${product.slug}`}>
        Explorar sistema <ArrowRightIcon />
      </Link>
    </article>
  );
}
