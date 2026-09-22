import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductTemplate } from "@/components/site/ProductTemplate";
import { getProduct, products } from "@/data/site";

type ProductPageProps = { params: { slug: string } };

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return { title: `${product.name} — ${product.title}`, description: product.description, alternates: { canonical: `/labs/${product.slug}` }, openGraph: { title: `AZLO / Labs / ${product.name}`, description: product.description, url: `/labs/${product.slug}` } };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductTemplate product={product} />;
}
