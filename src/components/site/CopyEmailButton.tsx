"use client";

import { useState } from "react";
import { CopyIcon } from "./Icons";

type CopyEmailButtonProps = { email: string };

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="copy-email" onClick={copyEmail} aria-live="polite">
      <CopyIcon /> {copied ? "E-mail copiado" : "Copiar e-mail"}
    </button>
  );
}
