import { StatusBadge } from "./StatusBadge";

interface DivisionCardProps {
  name: string;
  tier: 1 | 2 | 3;
  status: "ativa" | "em-construcao" | "reservada";
  tagline: string;
  description: string;
  /** Acento-assinatura da divisão (hex do Brand Book v4) — usado em decoração. */
  accent: string;
  /** Versão do acento com contraste AA para texto sobre fundo claro. */
  accentInk: string;
  /** Ficha técnica: pares rótulo → valor (status operacional, critério). */
  meta: [string, string][];
}

/**
 * Card de divisão da arquitetura em tiers.
 * A diferenciação entre divisões é feita apenas pelo acento-assinatura,
 * nunca por cores novas (regra do Brand Book v4).
 */
export function DivisionCard({
  name,
  tier,
  status,
  tagline,
  description,
  accent,
  accentInk,
  meta,
}: DivisionCardProps) {
  const reserved = status === "reservada";

  return (
    <article
      className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-azlo-line bg-white p-6 transition duration-200 sm:p-7 ${
        reserved
          ? "opacity-80"
          : "hover:-translate-y-1 hover:border-azlo-teal/40 hover:shadow-[0_24px_60px_-28px_rgba(5,43,87,0.35)]"
      }`}
    >
      {/* Barra de acento — assinatura de cor da divisão */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background: reserved
            ? "var(--azlo-line)"
            : `linear-gradient(90deg, ${accent}, ${accent}00)`,
        }}
      />

      <div className="flex items-center justify-between gap-3 pt-1">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-azlo-muted">
          Tier {tier}
        </span>
        <StatusBadge status={status} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl font-semibold leading-tight text-azlo-navy">
          {name}
        </h3>
        <p
          className="text-sm font-semibold leading-snug"
          style={{ color: reserved ? "var(--azlo-slate)" : accentInk }}
        >
          {tagline}
        </p>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-azlo-slate">
        {description}
      </p>

      {/* Ficha técnica — regras finas, sem inflar */}
      <dl className="mt-1 flex flex-col gap-2.5 border-t border-azlo-line pt-4">
        {meta.map(([dt, dd]) => (
          <div key={dt} className="grid grid-cols-[6.5rem_1fr] gap-3 text-xs">
            <dt className="font-semibold uppercase tracking-[0.08em] text-azlo-muted">
              {dt}
            </dt>
            <dd className="font-medium text-azlo-navy">{dd}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
