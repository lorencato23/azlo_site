import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  invert?: boolean;
  align?: "start" | "split";
};

export function SectionIntro({ eyebrow, title, text, invert = false, align = "split" }: SectionIntroProps) {
  return (
    <header className={`section-intro ${invert ? "section-intro--invert" : ""} section-intro--${align}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-intro__text">{text}</p> : null}
    </header>
  );
}
