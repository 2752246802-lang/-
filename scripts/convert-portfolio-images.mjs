import { readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';
import sharp from 'sharp';

const entry = resolve('src/main.jsx');
let source = await readFile(entry, 'utf8');
const matcher = /new URL\('([^']+\.(?:png|jpe?g))', import\.meta\.url\)/gi;
const matches = [...source.matchAll(matcher)];

for (const match of matches) {
  const relativePath = match[1];
  const input = resolve(dirname(entry), relativePath);
  const output = input.slice(0, -extname(input).length) + '.webp';

  await sharp(input)
    .resize({ width: 5120, height: 5120, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(output);

  source = source.replaceAll(relativePath, relativePath.replace(/\.(png|jpe?g)$/i, '.webp'));
}

await writeFile(entry, source);
