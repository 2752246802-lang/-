import { readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const folders = ['主图/内贸', '主图/外贸'];

for (const folder of folders) {
  const files = await readdir(folder);
  for (const file of files) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const input = join(folder, file);
    const output = join(folder, `${parse(file).name}.webp`);
    const image = sharp(input).resize({ width: 5120, height: 5120, fit: 'inside', withoutEnlargement: true });

    if (/\.png$/i.test(file)) {
      await image.webp({ lossless: true, effort: 6 }).toFile(output);
    } else {
      await image.webp({ quality: 98, alphaQuality: 100, effort: 6 }).toFile(output);
    }
  }
}
