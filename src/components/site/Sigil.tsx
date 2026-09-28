import type { ReactNode, SVGProps } from "react";
import type { ProductSlug } from "@/data/site";

type SigilProps = SVGProps<SVGSVGElement> & { product: ProductSlug };

const paths: Record<ProductSlug, ReactNode> = {
  mnemusa: <><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /><circle cx="12" cy="12" r="1.4" /></>,
  thoth: <><path d="M5 5h14v14H5z" /><path d="M8 8h8M8 12h8M8 16h5" /><path d="M16 5v4h3" /></>,
  logos: <><path d="M5 6h14M5 12h14M5 18h14" /><path d="m8 3 8 6-8 6 8 6" /></>,
  odin: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4.5 4.5M11 5v12M5 11h12" /></>,
  anubis: <><path d="M5 5v10h5M19 19V9h-5" /><path d="m8 12 4 4 4-4" /><path d="M12 3v5" /></>,
  hermes: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" /></>,
  atlas: <><path d="M4 19h16M6 19V8h12v11M3 8l9-5 9 5M9 12h6M9 15h6" /></>,
};

export function Sigil({ product, ...props }: SigilProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true" {...props}>
      {paths[product]}
    </svg>
  );
}
