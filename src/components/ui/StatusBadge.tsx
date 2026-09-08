interface StatusBadgeProps {
  status: "ativa" | "em-construcao" | "reservada";
  tone?: "light" | "dark";
}

const label: Record<StatusBadgeProps["status"], string> = {
  ativa: "Ativa",
  "em-construcao": "Em construção",
  reservada: "Reservada",
};

const styles: Record<
  StatusBadgeProps["status"],
  Record<"light" | "dark", { wrap: string; dot: string }>
> = {
  ativa: {
    light: {
      wrap: "bg-azlo-teal/10 text-azlo-teal-ink border-azlo-teal/35",
      dot: "bg-azlo-teal",
    },
    dark: {
      wrap: "bg-azlo-cyan/12 text-azlo-cyan border-azlo-cyan/35",
      dot: "bg-azlo-cyan",
    },
  },
  "em-construcao": {
    light: {
      wrap: "bg-azlo-navy/5 text-azlo-slate border-azlo-line",
      dot: "bg-azlo-blue",
    },
    dark: {
      wrap: "bg-white/8 text-white/70 border-white/16",
      dot: "bg-azlo-cyan/70",
    },
  },
  reservada: {
    light: {
      wrap: "bg-azlo-navy/[0.03] text-azlo-muted border-azlo-line/70",
      dot: "bg-azlo-muted",
    },
    dark: {
      wrap: "bg-white/5 text-white/45 border-white/10",
      dot: "bg-white/40",
    },
  },
};

export function StatusBadge({ status, tone = "light" }: StatusBadgeProps) {
  const s = styles[status][tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide ${s.wrap}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {label[status]}
    </span>
  );
}
