// One-off helper: converts the raw Figma exports in src/assets to right-sized WebP.
// Usage: npm run optimize-images  (re-run only if you replace a source image)
import sharp from 'sharp';
import { readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src/assets');

/** max width (px) per file; anything not listed falls back to DEFAULT_MAX */
const MAX_WIDTH = {
  'img/hero-tablet.png': 1100,
  'img/hero-family.png': 900,
  'img/parents-phone-original.png': 678,
  'img/avatar-johnson.png': 200,
  'img/avatar-amina.png': 200,
  'img/avatar-ade.png': 200,
};
const DEFAULT_MAX = 320; // logos render at <= 175px wide, so 2x is plenty
const SKIP = new Set(['img/hero-pattern.png', 'img/card-pattern.png', 'img/cta-pattern.png']);

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    if ((await stat(full)).isDirectory()) out.push(...(await walk(full)));
    else if (name.endsWith('.png')) out.push(full);
  }
  return out;
}

for (const file of await walk(root)) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  if (SKIP.has(rel)) continue;
  const max = MAX_WIDTH[rel] ?? DEFAULT_MAX;
  const target = file.replace(/\.png$/, '.webp');
  const before = (await stat(file)).size;
  await sharp(file).resize({ width: max, withoutEnlargement: true }).webp({ quality: 86 }).toFile(target);
  const after = (await stat(target)).size;
  await unlink(file);
  console.log(`${rel.padEnd(40)} ${(before / 1024).toFixed(0).padStart(6)}KB -> ${(after / 1024).toFixed(0).padStart(5)}KB`);
}
