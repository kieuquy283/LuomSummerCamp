import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgBuffer = fs.readFileSync(path.resolve('./public/og-image.svg'));

sharp(svgBuffer)
  .png()
  .toFile(path.resolve('./public/og-image.png'))
  .then((info) => {
    console.log('og-image.png generated successfully!', info);
  })
  .catch((err) => {
    console.error('Error generating png:', err);
  });
