import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/dashboard", (_req, res) => {
  res.json({ users: 1284, mrr: 12480, txVolume: 248000, retention: 83 });
});

app.get("/api/admin/users", (_req, res) => {
  res.json([
    { email: "alex@example.com", role: "ADMIN", plan: "PRO", status: "ACTIVE" },
    { email: "dana@example.com", role: "MANAGER", plan: "BUSINESS", status: "ACTIVE" },
    { email: "leo@example.com", role: "CLIENT", plan: "STARTER", status: "TRIAL" }
  ]);
});

const port = 4000;
app.listen(port, () => {
  console.log(`AURIXA API listening on http://localhost:${port}`);
});
