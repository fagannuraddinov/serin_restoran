import fs from 'fs';
import path from 'path';

const sourceDir = path.join(process.cwd(), 'serinn_files');
const imagesDestDir = path.join(process.cwd(), 'public', 'images');
const dataDestDir = path.join(process.cwd(), 'src', 'data');

if (!fs.existsSync(imagesDestDir)) {
  fs.mkdirSync(imagesDestDir, { recursive: true });
}
if (!fs.existsSync(dataDestDir)) {
  fs.mkdirSync(dataDestDir, { recursive: true });
}

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9.\-_]/g, '_').toLowerCase();
}

const categories = [];

const dirs = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());

for (const dir of dirs) {
  const dirPath = path.join(sourceDir, dir);
  const files = fs.readdirSync(dirPath);

  const txtFile = files.find(f => f.endsWith('.txt'));
  const imageFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png') || f.endsWith('.webp'));

  let backgroundUrl = '';
  if (imageFiles.length > 0) {
    const origImgPath = path.join(dirPath, imageFiles[0]);
    const safeImgName = sanitizeFilename(`${dir}_${imageFiles[0]}`);
    const destImgPath = path.join(imagesDestDir, safeImgName);
    fs.copyFileSync(origImgPath, destImgPath);
    backgroundUrl = `/images/${safeImgName}`;
  }

  const items = [];
  let categoryTitle = dir;
  
  if (txtFile) {
    const txtContent = fs.readFileSync(path.join(dirPath, txtFile), 'utf-8');
    const lines = txtContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    if (lines.length > 0) {
      if (dir === '30 Manat Menu') {
        categoryTitle = '30 Manatlıq Banket Menyusu';
        items.push({ name: lines.join('\n'), price: '30 AZN' }); // Just raw text for now
      } else {
        categoryTitle = lines[0]; // first line is usually title
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
          // Try to split by price. e.g. "Farel tavada (350q)  10 Azn"
          const match = line.match(/(.+?)\s+(\d+)\s*(Azn|azn|AZN|manat|Manat)?$/i);
          if (match) {
            items.push({ name: match[1].trim(), price: match[2].trim() + ' AZN' });
          } else {
            items.push({ name: line, price: '' });
          }
        }
      }
    }
  }

  categories.push({
    id: dir,
    title: categoryTitle,
    backgroundUrl: backgroundUrl,
    items: items
  });
}

const dataContent = `export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  backgroundUrl: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = ${JSON.stringify(categories, null, 2)};
`;

fs.writeFileSync(path.join(dataDestDir, 'menuData.ts'), dataContent, 'utf-8');
console.log('Data processing complete!');
