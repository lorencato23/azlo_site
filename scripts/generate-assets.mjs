/**
 * Gera favicons e og-image a partir dos assets REAIS da marca
 * (public/logos/azlo-*-real*.png) sobre Deep Navy (#052B57 — Brand Book v4).
 *
 * Nota: a versão anterior deste script partia de favicon.svg/og-image.svg,
 * que usavam o símbolo "100vetorial" deformado e a cor antiga #1E5B9D.
 *
 * Uso: npm run generate-assets  (a partir de azlo-site/)
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const logosDir = join(publicDir, "logos");

const NAVY = "#052B57";

// ---------- Favicons: símbolo real branco sobre quadrado navy arredondado ----------
const BASE = 512;
const roundedSquare = Buffer.from(
  `<svg width="${BASE}" height="${BASE}" xmlns="http://www.w3.org/2000/svg">
     <rect width="${BASE}" height="${BASE}" rx="96" fill="${NAVY}"/>
   </svg>`
);

const symbol = await sharp(join(logosDir, "azlo-symbol-real-white.png"))
  .resize(352, 352, { fit: "inside" })
  .toBuffer();

const faviconBase = await sharp(roundedSquare)
  .composite([{ input: symbol, gravity: "center" }])
  .png()
  .toBuffer();

for (const [file, px] of [
  ["favicon-32x32.png", 32],
  ["favicon-16x16.png", 16],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(faviconBase).resize(px, px).png().toFile(join(publicDir, file));
  console.log(`✓ public/${file}`);
}

// ---------- OG image: assinatura real branca sobre navy com brilho e tagline ----------
const ogBg = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <radialGradient id="glow" cx="82%" cy="8%" r="75%">
         <stop offset="0%" stop-color="#0A5E9C" stop-opacity="0.6"/>
         <stop offset="100%" stop-color="${NAVY}" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="1200" height="630" fill="${NAVY}"/>
     <rect width="1200" height="630" fill="url(#glow)"/>
     <text x="600" y="556" font-family="Georgia, 'Times New Roman', serif"
           font-size="32" fill="#8FD8E4" text-anchor="middle">
       Ideias que ganham forma.
     </text>
   </svg>`
);

const logo = await sharp(join(logosDir, "azlo-logo-real-white.png"))
  .resize({ width: 640 })
  .toBuffer();

await sharp(ogBg)
  .composite([{ input: logo, top: 165, left: 280 }])
  .png()
  .toFile(join(publicDir, "og-image.png"));
console.log("✓ public/og-image.png");
