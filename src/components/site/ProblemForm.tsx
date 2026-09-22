"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRightIcon } from "./Icons";
import { site } from "@/data/site";

type FormState = "idle" | "ready";

export function ProblemForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();
    const subject = `Conversa com a AZLO — ${value("organization") || "novo contexto"}`;
    const body = [
      `Nome: ${value("name")}`,
      `Organização: ${value("organization")}`,
      `E-mail: ${value("email")}`,
      "",
      "O que existe hoje?",
      value("current"),
      "",
      "Onde está a fricção?",
      value("friction"),
      "",
      "O que precisa acontecer?",
      value("outcome"),
      "",
      "Ambiente / stack (opcional)",
      value("stack") || "Não informado",
    ].join("\n");

    setState("ready");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="problem-form" onSubmit={handleSubmit}>
      <div className="problem-form__fields">
        <label>Seu nome<input name="name" required autoComplete="name" /></label>
        <label>Organização<input name="organization" required autoComplete="organization" /></label>
        <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label>O que existe hoje?<textarea name="current" required rows={4} /></label>
      <label>Onde está a fricção?<textarea name="friction" required rows={4} /></label>
      <label>O que precisa acontecer?<textarea name="outcome" required rows={4} /></label>
      <label>Ambiente / stack <span className="problem-form__optional">opcional</span><textarea name="stack" rows={3} /></label>
      <div className="problem-form__footer">
        <button className="button button--primary" type="submit">Enviar contexto <ArrowUpRightIcon /></button>
        <p aria-live="polite">{state === "ready" ? "Abrindo seu cliente de e-mail…" : `A mensagem será preparada para ${site.email}.`}</p>
      </div>
      <small className="boundary-note">Não envie dados clínicos identificáveis, credenciais, tokens ou informações pessoais sensíveis.</small>
    </form>
  );
}
