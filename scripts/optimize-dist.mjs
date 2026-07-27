import { readdir, rename } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const assetsDir = 'dist/assets';
const files = await readdir(assetsDir);

for (const file of files) {
  const input = join(assetsDir, file);
  const extension = file.slice(file.lastIndexOf('.'));
  const output = `${input.slice(0, -extension.length)}.optimized${extension}`;
  if (/\.jpe?g$/i.test(file)) {
    await sharp(input).jpeg({ quality: 82, mozjpeg: true }).toFile(output);
  } else if (/\.png$/i.test(file)) {
    await sharp(input).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(output);
  } else {
    continue;
  }
  await rename(output, input);
}
