#!/usr/bin/env node
/**
 * Busca produtos e links de afiliado na API de afiliados da Shopee Brasil.
 *
 *   node scripts/shopee-offers.mjs search "aspersor de jardim" [--limit 10] [--sort sales|rating|price|commission]
 *   node scripts/shopee-offers.mjs item <itemId>
 *   node scripts/shopee-offers.mjs image <itemId> <slug>     (baixa a foto do anúncio para public/images/products/<slug>.jpg)
 *
 * Credenciais: SHOPEE_APP_ID e SHOPEE_APP_SECRET, do ambiente ou do .env.local (nunca versionados).
 * O `offerLink` (https://s.shopee.com.br/<código>) é o link de afiliado que vai no botão de compra.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const ENDPOINT = "https://open-api.affiliate.shopee.com.br/graphql";

function loadEnv() {
  const env = { ...process.env };
  const file = resolve(ROOT, ".env.local");
  if (existsSync(file)) {
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const i = line.indexOf("=");
      if (i > 0 && !(line.slice(0, i) in env)) env[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return env;
}

const SORT = { relevance: 1, sales: 2, price: 4, commission: 5 };
const FIELDS = "itemId productName priceMin priceMax ratingStar sales shopName shopId offerLink productLink imageUrl commissionRate";

async function gql(query) {
  const env = loadEnv();
  const id = env.SHOPEE_APP_ID;
  const secret = env.SHOPEE_APP_SECRET;
  if (!id || !secret) throw new Error("defina SHOPEE_APP_ID e SHOPEE_APP_SECRET (ambiente ou .env.local)");
  const payload = JSON.stringify({ query });
  for (let i = 0; i < 4; i++) {
    const ts = Math.floor(Date.now() / 1000);
    const signature = createHash("sha256").update(`${id}${ts}${payload}${secret}`).digest("hex");
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `SHA256 Credential=${id}, Timestamp=${ts}, Signature=${signature}` },
      body: payload,
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json && !json.errors) return json.data;
    if (res.status >= 500 || res.status === 429) {
      await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
      continue;
    }
    throw new Error(`Shopee API ${res.status}: ${JSON.stringify(json?.errors ?? json).slice(0, 300)}`);
  }
  throw new Error("Shopee API indisponível após novas tentativas");
}

const row = (n) =>
  `${n.itemId} | ${n.productName.slice(0, 90)} | R$ ${n.priceMin}${n.priceMax !== n.priceMin ? `–${n.priceMax}` : ""} | ★ ${n.ratingStar} | ${n.sales} vendidos | ${n.shopName.trim()} | ${n.offerLink}`;

async function search(keyword, limit, sort) {
  const q = `{ productOfferV2(keyword: ${JSON.stringify(keyword)}, limit: ${limit}, sortType: ${SORT[sort] ?? 2}) { nodes { ${FIELDS} } } }`;
  const data = await gql(q);
  return data.productOfferV2.nodes;
}

async function item(itemId) {
  const data = await gql(`{ productOfferV2(itemId: ${Number(itemId)}, limit: 1) { nodes { ${FIELDS} } } }`);
  return data.productOfferV2.nodes[0];
}

const [cmd, a, b, ...rest] = process.argv.slice(2);
try {
  if (cmd === "search" && a) {
    const args = [b, ...rest].filter(Boolean);
    const opt = (name, def) => (args.includes(name) ? args[args.indexOf(name) + 1] : def);
    const nodes = await search(a, Number(opt("--limit", 10)), opt("--sort", "sales"));
    if (!nodes.length) console.log("Nenhum produto. Tente outra consulta.");
    nodes.forEach((n) => console.log(row(n)));
  } else if (cmd === "item" && a) {
    const n = await item(a);
    console.log(n ? JSON.stringify(n, null, 2) : "Item não encontrado.");
  } else if (cmd === "image" && a && b) {
    const n = await item(a);
    if (!n) throw new Error("Item não encontrado");
    const res = await fetch(n.imageUrl);
    if (!res.ok) throw new Error(`imagem ${res.status}`);
    const dir = resolve(ROOT, "public/images/products");
    mkdirSync(dir, { recursive: true });
    writeFileSync(resolve(dir, `${b}.jpg`), Buffer.from(await res.arrayBuffer()));
    console.log(`Baixado: public/images/products/${b}.jpg\nAnúncio: ${n.productLink}\nLoja: ${n.shopName.trim()}`);
  } else {
    console.error('uso: search "<consulta>" [--limit N] [--sort sales|rating|price|commission] | item <itemId> | image <itemId> <slug>');
    process.exit(1);
  }
} catch (e) {
  console.error(`shopee-offers: ${e.message}`);
  process.exit(1);
}
