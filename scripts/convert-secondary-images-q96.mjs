import { readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const folders = ['主图/内贸', '主图/外贸', '内贸详情页', '国际站详情页', '店铺首页'];

for (const folder of folders) {
  for (const file of await readdir(folder)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const input = join(folder, file);
    const output = join(folder, `${parse(file).name}.webp`);
    await sharp(input)
      .resize({ width: 5120, height: 5120, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 96, alphaQuality: 100, effort: 6 })
      .toFile(output);
  }
}
