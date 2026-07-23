import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

type Image = { source: string; output: string; crop?: { left: number; top: number; width: number; height: number }; masks?: Array<{ left: number; top: number; width: number; height: number }>; highlight: { left: number; top: number; width: number; height: number; label: string } };
const images: Image[] = [
  { source: 'options-sign-in.png', output: 'desktop-01-sign-in-options.png', crop: { left: 188, top: 79, width: 600, height: 559 }, highlight: { left: 208, top: 126, width: 146, height: 30, label: '1. Sign in to GitHub.com' } },
  { source: 'authorize-open.png', output: 'desktop-02-authorize-open.png', crop: { left: 190, top: 83, width: 515, height: 205 }, highlight: { left: 246, top: 143, width: 177, height: 42, label: '2. GitHubDesktop.exe 열기' } },
  { source: 'clone-menu.png', output: 'desktop-03-clone-menu.png', crop: { left: 36, top: 0, width: 330, height: 220 }, highlight: { left: 4, top: 97, width: 296, height: 35, label: '1. Clone repository' } },
  { source: 'clone-dialog.png', output: 'desktop-04-clone-dialog.png', crop: { left: 236, top: 106, width: 502, height: 505 }, masks: [{ left: 20, top: 139, width: 462, height: 180 }, { left: 20, top: 320, width: 462, height: 32 }, { left: 20, top: 389, width: 390, height: 32 }], highlight: { left: 235, top: 459, width: 121, height: 27, label: '2. Clone' } },
  { source: 'main-fetch.png', output: 'desktop-05-main-fetch.png', highlight: { left: 250, top: 0, width: 460, height: 78, label: '1. main 확인 · 2. Fetch origin' } },
  { source: 'branch-menu.png', output: 'desktop-06-branch-menu.png', crop: { left: 250, top: 78, width: 366, height: 570 }, highlight: { left: 267, top: 39, width: 88, height: 30, label: '3. New branch' } },
  { source: 'create-branch.png', output: 'desktop-07-create-branch.png', crop: { left: 287, top: 233, width: 400, height: 252 }, highlight: { left: 22, top: 91, width: 357, height: 28, label: '4. 이름 입력' } },
  { source: 'changes-commit.png', output: 'desktop-08-changes-commit.png', highlight: { left: 10, top: 681, width: 230, height: 32, label: '5. Commit to main' } },
  { source: 'push-origin.png', output: 'desktop-09-push-origin.png', highlight: { left: 480, top: 25, width: 194, height: 54, label: '6. Push origin' } },
  { source: 'fetch-warning.png', output: 'desktop-10-fetch-warning.png', crop: { left: 187, top: 253, width: 600, height: 213 }, highlight: { left: 334, top: 164, width: 122, height: 29, label: 'Fetch' } },
  { source: 'publish-branch.png', output: 'desktop-11-publish-branch.png', crop: { left: 280, top: 210, width: 650, height: 410 }, highlight: { left: 508, top: 70, width: 105, height: 30, label: 'Publish branch' } },
  { source: 'pr-ready.png', output: 'desktop-12-pr-ready.png', crop: { left: 280, top: 210, width: 650, height: 410 }, highlight: { left: 432, top: 69, width: 180, height: 32, label: 'Create Pull Request' } },
  { source: 'changes-develop.png', output: 'desktop-13-changes-develop.png', highlight: { left: 10, top: 681, width: 230, height: 32, label: 'Commit to develop' } },
  { source: 'push-develop.png', output: 'desktop-14-push-develop.png', highlight: { left: 480, top: 25, width: 194, height: 54, label: 'Push origin' } },
  { source: 'repo-branch-notice.png', output: 'desktop-15-repo-branch-notice.png', crop: { left: 280, top: 200, width: 1000, height: 800 }, masks: [{ left: 60, top: 220, width: 900, height: 52 }], highlight: { left: 780, top: 110, width: 180, height: 45, label: 'Compare & pull request' } },
  { source: 'pr-form.png', output: 'desktop-16-pr-form.png', crop: { left: 330, top: 230, width: 1250, height: 750 }, highlight: { left: 710, top: 615, width: 205, height: 45, label: 'Create pull request' } },
];
const svg = (width: number, height: number, image: Image) => { const h = image.highlight; const masks = (image.masks ?? []).map((m) => `<rect x="${m.left}" y="${m.top}" width="${m.width}" height="${m.height}" fill="#18251f"/>`).join(''); return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${masks}<rect x="${h.left}" y="${h.top}" width="${h.width}" height="${h.height}" rx="6" fill="none" stroke="#d8ed45" stroke-width="4"/><rect x="12" y="12" width="${Math.min(width - 24, Math.max(180, h.label.length * 8))}" height="28" rx="6" fill="#17382d"/><text x="22" y="31" font-family="Arial" font-size="14" font-weight="700" fill="#fff">${h.label.replace(/&/g, '&amp;')}</text></svg>`; };

await mkdir('public/annotated/desktop', { recursive: true });
for (const image of images) { const source = `private-captures/desktop/${image.source}`; let pipeline = sharp(source); if (image.crop) pipeline = pipeline.extract(image.crop); const meta = await sharp(source).metadata(); const width = image.crop?.width ?? meta.width!; const height = image.crop?.height ?? meta.height!; await pipeline.composite([{ input: Buffer.from(svg(width, height, image)), top: 0, left: 0 }]).png().toFile(`public/annotated/desktop/${image.output}`); console.log(`prepared ${image.output}`); }
