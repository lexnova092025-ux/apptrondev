"use client";

import { useState } from "react";

export default function PilotLogin() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("...verificando");
    try {
      const res = await fetch('/api/pilot-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const json = await res.json();
      if (res.ok) {
        setMsg('Autenticado! Redirecionando...');
        const from = new URL(window.location.href).searchParams.get('from') || '/';
        window.location.href = from;
      } else {
        setMsg(json.message || 'Senha incorreta');
      }
    } catch (error) {
      console.error(error);
      setMsg('Erro ao autenticar');
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={submit} style={{ width: 360, padding: 24, border: '1px solid var(--button-secondary-border)', borderRadius: 8 }}>
        <h2>Acesso para Pilotos</h2>
        <p>Informe a senha fornecida para acessar o ambiente de staging.</p>
        <label htmlFor="pilot-password">Senha</label>
        <input id="pilot-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" style={{ width: '100%', padding: 8, marginTop: 8, marginBottom: 12 }} />
        <button type="submit" style={{ width: '100%', padding: 10 }}>Entrar</button>
        <p role="status" aria-live="polite" style={{ marginTop: 12 }}>{msg}</p>
      </form>
    </div>
  );
}
