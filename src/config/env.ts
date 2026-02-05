import dotenv from "dotenv";

dotenv.config();

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function numberEnv(name: string, fallback: number): number {
  const v = process.env[name];
  if (!v) return fallback;

  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`Invalid number env: ${name}`);

  return n;
}


