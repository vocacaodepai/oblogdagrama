#!/usr/bin/env node
/**
 * Monta a capa 1600x840 de um comparativo: um card branco com sombra suave por produto (foto inteira,
 * sem corte nem zoom) e o nome do modelo escrito embaixo, sobre fundo em degradê verde-claro.
 *
 *   node scripts/build-comparativo-cover.mjs <saida.jpg> "<foto1>::<Nome 1>" "<foto2>::<Nome 2>" ["<foto3>::<Nome 3>"]
 *
 * Só usa as fotos reais dos produtos (nunca imagem gerada por IA).
 */
import sharp from "sharp";
import { resolve } from "node:path";

const [, , output, ...items] = process.argv;
if (!output || items.length < 2 || items.length > 3) {
  console.error('uso: node scripts/build-comparativo-cover.mjs <saida.jpg> "<foto>::<Nome>" "<foto>::<Nome>" ["<foto>::<Nome>"]');
  process.exit(1);
}

const W = 1600;
const H = 840;
const n = items.length;
const GAP = 60;
const PAD = 50;
const CARD_W = Math.floor((W - 2 * PAD - (n - 1) * GAP) / n);
const CARD_H = 560;
const TOP = 90;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const bg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6f9f1"/><stop offset="1" stop-color="#dfeccf"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/></svg>`
);
const composites = [];
for (let i = 0; i < n; i++) {
  const [file, label] = items[i].split("::");
  const x = PAD + i * (CARD_W + GAP);
  const shadow = await sharp({ create: { width: CARD_W, height: CARD_H, channels: 4, background: { r: 18, g: 48, b: 30, alpha: 0.28 } } })
    .composite([{ input: Buffer.from(`<svg width="${CARD_W}" height="${CARD_H}"><rect width="${CARD_W}" height="${CARD_H}" rx="26" fill="#fff"/></svg>`), blend: "dest-in" }])
    .blur(14).png().toBuffer();
  composites.push({ input: shadow, left: x, top: TOP + 10 });
  const card = await sharp({ create: { width: CARD_W, height: CARD_H, channels: 4, background: "#ffffff" } })
    .composite([{ input: Buffer.from(`<svg width="${CARD_W}" height="${CARD_H}"><rect width="${CARD_W}" height="${CARD_H}" rx="26" fill="#fff"/></svg>`), blend: "dest-in" }])
    .png().toBuffer();
  composites.push({ input: card, left: x, top: TOP });
  const inner = 36;
  const photo = await sharp(resolve(file))
    .resize(CARD_W - 2 * inner, CARD_H - 2 * inner, { fit: "contain", background: "#ffffff" })
    .toBuffer();
  composites.push({ input: photo, left: x + inner, top: TOP + inner });
  const size = label.length > 24 ? 34 : 40;
  composites.push({
    input: Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W + GAP}" height="90"><text x="${(CARD_W + GAP) / 2}" y="58" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-weight="700" font-size="${size}" fill="#12301e">${esc(label)}</text></svg>`
    ),
    left: x - GAP / 2,
    top: TOP + CARD_H + 30,
  });
}
await sharp(bg).composite(composites).jpeg({ quality: 88 }).toFile(resolve(output));
console.log(`Capa gerada: ${output} (${W}x${H})`);
