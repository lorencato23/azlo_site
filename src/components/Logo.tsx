/*
 * Logo AZLO — usa os assets REAIS da marca (PNG), não a reconstrução
 * "100vetorial", que havia deformado o símbolo (estrela/Z/arco).
 *
 * Assets em /public/logos/:
 *   - azlo-logo-real.png         → assinatura completa, fundo claro   (976×383)
 *   - azlo-logo-real-white.png   → assinatura completa, fundo escuro  (976×383)
 *   - azlo-symbol-real.png       → símbolo isolado, fundo claro       (350×355)
 *   - azlo-symbol-real-white.png → símbolo isolado, fundo escuro      (350×355)
 */

interface LogoProps {
  variant?: "positive" | "negative";
  className?: string;
}

export function Logo({ variant = "positive", className = "" }: LogoProps) {
  const src =
    variant === "negative"
      ? "/logos/azlo-logo-real-white.png"
      : "/logos/azlo-logo-real.png";

  return (
    <img
      src={src}
      alt="AZLO — Alpha Zenith Life Optimization"
      className={className}
      width={976}
      height={383}
      loading="eager"
      decoding="sync"
    />
  );
}

export function LogoSymbol({
  variant = "positive",
  className = "",
}: LogoProps) {
  const src =
    variant === "negative"
      ? "/logos/azlo-symbol-real-white.png"
      : "/logos/azlo-symbol-real.png";

  return (
    <img
      src={src}
      alt="Símbolo AZLO"
      className={className}
      width={350}
      height={355}
      loading="lazy"
      decoding="async"
    />
  );
}
