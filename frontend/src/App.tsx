import { useMemo, useState } from "react";

type Page = "dashboard" | "admin" | "billing" | "security" | "wallet";

const cards = [
  { label: "[ACTIVE_USERS]", value: "1,284" },
  { label: "[MRR]", value: "$12,480" },
  { label: "[TX_VOLUME]", value: "$248k" },
  { label: "[RETENTION]", value: "83%" }
];

export function App() {
  const [page, setPage] = useState<Page>("dashboard");

  const content = useMemo(() => {
    switch (page) {
      case "dashboard": return <Dashboard />;
      case "admin": return <Admin />;
      case "billing": return <Billing />;
      case "security": return <Security />;
      case "wallet": return <Wallet />;
    }
  }, [page]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">AURIXA</div>
          <nav className="nav">
            <button onClick={() => setPage("dashboard")}>[DASHBOARD]</button>
            <button onClick={() => setPage("admin")}>[ADMIN]</button>
            <button onClick={() => setPage("billing")}>[BILLING]</button>
            <button onClick={() => setPage("security")}>[SECURITY]</button>
            <button onClick={() => setPage("wallet")}>[WALLET]</button>
          </nav>
        </div>
      </header>

      <main className="container main-grid">
        <section className="hero glass">
          <span className="badge">[AI_CRYPTO_SAAS]</span>
          <h1>[RUN_YOUR_CRYPTO_BUSINESS_LIKE_A_COMPANY]</h1>
          <p>[LANDING_COPY_PLACEHOLDER]</p>
          <div className="actions">
            <button className="primary">[START_FREE_TRIAL]</button>
            <button>[BOOK_DEMO]</button>
          </div>
        </section>

        <section className="stats-grid">
          {cards.map((card) => (
            <article key={card.label} className="glass stat-card">
              <div className="stat-label">{card.label}</div>
              <div className="stat-value">{card.value}</div>
            </article>
          ))}
        </section>

        <section className="glass panel">{content}</section>
      </main>
    </div>
  );
}

function Dashboard() {
  return <div className="grid-2">
    <Card t="[MARKET_ENGINE]" p="[AI_SIGNAL_SUMMARY]" />
    <Card t="[PORTFOLIO_INTELLIGENCE]" p="[PORTFOLIO_SUMMARY]" />
    <Card t="[CRM_PIPELINE]" p="[CRM_SUMMARY]" />
    <Card t="[AUTOMATION_CORE]" p="[AUTOMATION_SUMMARY]" />
  </div>;
}

function Admin() {
  return <div>
    <h2>[ADMIN_PANEL_TITLE]</h2>
    <table className="table">
      <thead><tr><th>[USER]</th><th>[ROLE]</th><th>[PLAN]</th><th>[STATUS]</th></tr></thead>
      <tbody>
        <tr><td>alex@example.com</td><td>ADMIN</td><td>PRO</td><td>[ACTIVE]</td></tr>
        <tr><td>dana@example.com</td><td>MANAGER</td><td>BUSINESS</td><td>[ACTIVE]</td></tr>
        <tr><td>leo@example.com</td><td>CLIENT</td><td>STARTER</td><td>[TRIAL]</td></tr>
      </tbody>
    </table>
  </div>;
}

function Billing() {
  return <div className="grid-3">
    <Plan t="[STARTER]" price="$29" p="[STARTER_COPY]" />
    <Plan t="[PRO]" price="$79" p="[PRO_COPY]" featured />
    <Plan t="[ENTERPRISE]" price="$199+" p="[ENTERPRISE_COPY]" />
  </div>;
}

function Security() {
  return <div className="grid-2">
    <Card t="[LOGIN]" p="[EMAIL_PASSWORD_FLOW]" />
    <Card t="[2FA]" p="[OTP_AND_TOTP_FLOW]" />
    <Card t="[EMAIL_VERIFICATION]" p="[VERIFY_FLOW]" />
    <Card t="[PASSWORD_RESET]" p="[RESET_FLOW]" />
  </div>;
}

function Wallet() {
  return <div className="grid-2">
    <Card t="[SIWE_NONCE]" p="[WALLET_NONCE_FLOW]" />
    <Card t="[SIGNATURE_VERIFICATION]" p="[SIGNATURE_FLOW]" />
  </div>;
}

function Card({t,p}:{t:string;p:string}) {
  return <div className="mini-card"><h3>{t}</h3><p>{p}</p></div>;
}

function Plan({t,price,p,featured}:{t:string;price:string;p:string;featured?:boolean}) {
  return <div className={`plan-card ${featured ? "featured" : ""}`}>
    <h3>{t}</h3><div className="price">{price}</div><p>{p}</p>
    <button className={featured ? "primary" : ""}>[BUY]</button>
  </div>;
}
