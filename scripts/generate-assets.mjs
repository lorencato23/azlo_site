/**
 * Gera favicons e og-image a partir dos assets REAIS da marca
 * (public/logos/azlo-*-real*.png) sobre Deep Navy (#052B57 — Brand Book v4).
 *
 * Nota: a versão anterior deste script partia de favicon.svg/og-image.svg,
 * que usavam o símbolo "100vetorial" deformado e a cor antiga #1E5B9D.
 *
 * Uso: npm run generate-assets  (a partir de azlo-site/)
 */
import { spawnSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const logosDir = join(publicDir, "logos");

const NAVY = "#052B57";
const sharpModule = await import("sharp").catch(() => null);
const sharp = sharpModule?.default;

async function renderSvg(svg, outputPath, size) {
  if (sharp) {
    const image = sharp(Buffer.from(svg));
    if (size) image.resize(size, size, { fit: "fill" });
    await image.png().toFile(outputPath);
    return;
  }

  const args = ["svg:-"];
  if (size) args.push("-resize", `${size}x${size}!`);
  args.push("png:-");
  const result = spawnSync("magick", args, { input: Buffer.from(svg) });
  if (result.error || result.status !== 0) {
    throw new Error(`Falha ao renderizar ${outputPath} com sharp ou ImageMagick: ${result.error?.message ?? result.stderr.toString()}`);
  }
  await writeFile(outputPath, result.stdout);
}

// ---------- Favicons: símbolo real branco sobre quadrado navy arredondado ----------
const symbol = await readFile(join(logosDir, "azlo-symbol-real-white.png"));
const symbolData = `data:image/png;base64,${symbol.toString("base64")}`;
const faviconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect width="512" height="512" rx="96" fill="${NAVY}"/><image href="${symbolData}" x="80" y="78" width="352" height="356" preserveAspectRatio="xMidYMid meet"/></svg>`;

for (const [file, px] of [
  ["favicon-32x32.png", 32],
  ["favicon-16x16.png", 16],
  ["apple-touch-icon.png", 180],
]) {
  await renderSvg(faviconSvg, join(publicDir, file), px);
  console.log(`✓ public/${file}`);
}

// ---------- OG image: peça 1200×630 com a marca aprovada sem redesenho ----------
const ogTemplate = await readFile(join(__dirname, "og-image-template.svg"), "utf8");
const ogSvg = ogTemplate.replace(
  "__AZLO_SYMBOL_PNG__",
  symbol.toString("base64"),
);
if (ogSvg === ogTemplate || ogSvg.includes("__AZLO_SYMBOL_PNG__")) {
  throw new Error("Não foi possível inserir o símbolo aprovado no template Open Graph.");
}

await renderSvg(ogSvg, join(publicDir, "og-image.png"));
console.log("✓ public/og-image.png");
