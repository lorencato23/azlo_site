interface SectionLabelProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Eyebrow de seção — rótulo curto em caixa alta com tracking positivo,
 * conforme a hierarquia tipográfica do Brand Book v4 (legendas).
 */
export function SectionLabel({
  children,
  tone = "light",
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-2.5 text-eyebrow font-semibold uppercase ${
        tone === "dark" ? "text-azlo-cyan" : "text-azlo-teal-ink"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-6 ${tone === "dark" ? "bg-azlo-cyan/50" : "bg-azlo-teal/60"}`}
      />
      {children}
    </p>
  );
}
