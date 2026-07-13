"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";

const nodes = [
  { name: "Health", verb: "organizar", className: "signal-node--health" },
  { name: "Labs", verb: "construir", className: "signal-node--labs" },
  { name: "Education", verb: "traduzir", className: "signal-node--education" },
  { name: "Science", verb: "investigar", className: "signal-node--science" },
];

export function SignalField() {
  const field = useRef<HTMLDivElement>(null);

  const track = (event: PointerEvent<HTMLDivElement>) => {
    const element = field.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--signal-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--signal-y", `${event.clientY - rect.top}px`);
    element.style.setProperty("--signal-rx", `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`);
    element.style.setProperty("--signal-ry", `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`);
  };

  const reset = () => {
    const element = field.current;
    if (!element) return;
    element.style.setProperty("--signal-rx", "0deg");
    element.style.setProperty("--signal-ry", "0deg");
  };

  return (
    <div
      ref={field}
      className="signal-field"
      onPointerMove={track}
      onPointerLeave={reset}
      style={{ "--signal-x": "50%", "--signal-y": "50%" } as CSSProperties}
      aria-label="Sistema AZLO: quatro frentes conectadas"
    >
      <span className="signal-field__cursor" aria-hidden="true" />
      <span className="signal-field__halo" aria-hidden="true" />

      <svg className="signal-field__orbits" viewBox="0 0 620 620" fill="none" aria-hidden="true">
        <circle cx="310" cy="310" r="214" />
        <circle cx="310" cy="310" r="148" />
        <circle cx="310" cy="310" r="82" />
        <path className="signal-field__arc signal-field__arc--one" d="M96 310A214 214 0 0 1 310 96" />
        <path className="signal-field__arc signal-field__arc--two" d="M310 458A148 148 0 0 0 458 310" />
        <path className="signal-field__axis" d="M310 52V568M52 310H568" />
      </svg>

      <div className="signal-field__core">
        <span className="signal-field__core-ring" aria-hidden="true" />
        <img src="/logos/azlo-symbol-real-white.png" alt="" width="350" height="355" />
        <small>one system</small>
      </div>

      {nodes.map((node, index) => (
        <a key={node.name} href="#frentes" className={`signal-node ${node.className}`}>
          <span className="signal-node__index">0{index + 1}</span>
          <strong>{node.name}</strong>
          <small>{node.verb}</small>
        </a>
      ))}

      <p className="signal-field__caption"><span /> conhecimento em movimento</p>
    </div>
  );
}
