import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

type Image = { source: string; output: string; crop?: { left: number; top: number; width: number; height: number }; masks?: Array<{ left: number; top: number; width: number; height: number }>; highlight: { left: number; top: number; width: number; height: number; label: string } };
const images: Image[] = [
  { source: 'options-sign-in.png', output: 'desktop-01-sign-in-options.png', crop: { left: 188, top: 79, width: 600, height: 559 }, highlight: { left: 208, top: 126, width: 146, height: 30, label: '1. Sign in to GitHub.com' } },
  { source: 'authorize-open.png', output: 'desktop-02-authorize-open.png', crop: { left: 190, top: 83, width: 515, height: 205 }, highlight: { left: 246, top: 143, width: 177, height: 42, label: '2. GitHubDesktop.exe 열기' } },
  { source: 'clone-menu.png', output: 'desktop-03-clone-menu.png', crop: { left: 36, top: 0, width: 330, height: 220 }, highlight: { left: 4, top: 97, width: 296, height: 35, label: '1. Clone repository' } },
  { source: 'clone-dialog.png', output: 'desktop-04-clone-dialog.png', crop: { left: 236, top: 106, width: 502, height: 505 }, masks: [{ left: 20, top: 139, width: 462, height: 180 }, { left: 20, top: 320, width: 462, height: 32 }, { left: 20, top: 389, width: 390, height: 32 }], highlight: { left: 235, top: 459, width: 121, height: 27, label: '2. Clone' } },
  { source: 'main-fetch.png', output: 'desktop-05-main-fetch.png', highlight: { left: 250, top: 0, width: 460, height: 78, label: '1. main 확인 · 2. Fetch origin' } },
];
const svg = (width: number, height: number, image: Image) => { const h = image.highlight; const masks = (image.masks ?? []).map((m) => `<rect x="${m.left}" y="${m.top}" width="${m.width}" height="${m.height}" fill="#18251f"/>`).join(''); return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${masks}<rect x="${h.left}" y="${h.top}" width="${h.width}" height="${h.height}" rx="6" fill="none" stroke="#d8ed45" stroke-width="4"/><rect x="12" y="12" width="${Math.min(width - 24, Math.max(180, h.label.length * 8))}" height="28" rx="6" fill="#17382d"/><text x="22" y="31" font-family="Arial" font-size="14" font-weight="700" fill="#fff">${h.label.replace(/&/g, '&amp;')}</text></svg>`; };

await mkdir('public/annotated/desktop', { recursive: true });
for (const image of images) { const source = `private-captures/desktop/${image.source}`; let pipeline = sharp(source); if (image.crop) pipeline = pipeline.extract(image.crop); const meta = await sharp(source).metadata(); const width = image.crop?.width ?? meta.width!; const height = image.crop?.height ?? meta.height!; await pipeline.composite([{ input: Buffer.from(svg(width, height, image)), top: 0, left: 0 }]).png().toFile(`public/annotated/desktop/${image.output}`); console.log(`prepared ${image.output}`); }
