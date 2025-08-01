#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, '../public/images/gallery');
const GALLERY_FILE = path.join(__dirname, '../src/pages/Gallery.tsx');

function scanGalleryFolder() {
  const files = fs.readdirSync(GALLERY_DIR)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext) && file !== 'README.md';
    })
    .sort();

  return files;
}

function generatePhotosArray(files) {
  const photos = files.map(file => {
    // Generate caption from filename
    let caption = path.basename(file, path.extname(file))
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      url: `/images/gallery/${file}`,
      caption: caption
    };
  });

  return `const photos = [
${photos.map(photo => `  {
    url: '${photo.url}',
    caption: '${photo.caption}'
  }`).join(',\n')}
];`;
}

function updateGalleryFile() {
  const files = scanGalleryFolder();
  const photosCode = generatePhotosArray(files);
  
  let content = fs.readFileSync(GALLERY_FILE, 'utf8');
  
  // Replace the photos array
  const photosRegex = /const photos = \[[\s\S]*?\];/;
  content = content.replace(photosRegex, photosCode);
  
  fs.writeFileSync(GALLERY_FILE, content);
  
  console.log('✅ Gallery.tsx updated successfully!');
  console.log(`📸 Found ${files.length} photos:`);
  files.forEach(file => console.log(`   - ${file}`));
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  updateGalleryFile();
}

export { updateGalleryFile, scanGalleryFolder };
