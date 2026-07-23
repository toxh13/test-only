import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
const images = {
    'github-04-new-issue.png': { crop: [.05, .14, .90, .70], label: 'Issue 제목과 설명 입력', box: [.05, .08, .90, .78], markers: [[.22, .20, '1'], [.27, .50, '2'], [.76, .88, '3']] },
    'github-05-pull-requests-tab.png': { crop: [.63, .23, .35, .18], label: 'New pull request', box: [.04, .08, .92, .82], markers: [[.56, .50, '1']] },
    'github-06-branches.png': { crop: [.50, .05, .47, .55], label: 'New branch', box: [.35, .12, .60, .30], markers: [[.68, .27, '1']] },
    'github-06-new-pull-request.png': { crop: [.04, .14, .92, .62], label: 'base와 compare 확인', box: [.03, .08, .94, .67], markers: [[.28, .22, '1'], [.68, .22, '2'], [.54, .78, '3']] },
    'github-08-file-edit.png': { crop: [.05, .12, .90, .74], label: '파일명과 내용 작성', box: [.04, .08, .92, .78], markers: [[.30, .19, '1'], [.50, .55, '2']] },
    'github-09-pr-conversation.png': { crop: [.06, .39, .64, .20], label: '새 Commit이 PR에 반영됨', box: [.04, .10, .92, .78], markers: [[.45, .27, '1']] },
    'github-10-files-changed.png': { crop: [.05, .20, .90, .66], label: '변경 파일과 한 줄 검토', box: [.04, .09, .92, .80], markers: [[.45, .18, '1'], [.48, .66, '2']] },
    'github-11-review-changes.png': { crop: [.12, .14, .76, .72], label: 'Review 결과 선택', box: [.04, .08, .92, .82], markers: [[.48, .33, '1'], [.45, .60, '2']] },
    'github-12-merge.png': { crop: [.10, .25, .80, .32], label: 'Merge pull request', box: [.05, .08, .90, .82], markers: [[.50, .48, '1']] },
    'github-14-merged.png': { crop: [.05, .10, .90, .34], label: 'Merged 상태 확인', box: [.04, .08, .92, .82], markers: [[.33, .42, '1'], [.72, .70, '2']] }
};
const esc = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
function svg(width, height, focus) { const [x, y, w, h] = focus.box.map((value, index) => index % 2 ? value * height : value * width); const marker = focus.markers.map(([mx, my, text]) => `<circle cx="${mx * width}" cy="${my * height}" r="${Math.max(18, width * .04)}" fill="#e8f35f" stroke="#17382d" stroke-width="4"/><text x="${mx * width}" y="${my * height + 7}" text-anchor="middle" font-family="Arial" font-size="${Math.max(18, width * .045)}" font-weight="700" fill="#17382d">${text}</text>`).join(''); return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#e8f35f" fill-opacity=".15" stroke="#d8ed45" stroke-width="5"/>${marker}<rect x="12" y="12" width="${Math.min(width - 24, Math.max(180, focus.label.length * 16))}" height="32" rx="8" fill="#17382d"/><text x="24" y="34" font-family="Arial" font-size="17" font-weight="700" fill="#fff">${esc(focus.label)}</text></svg>`; }
await mkdir('public/annotated/github', { recursive: true });
for (const [file, focus] of Object.entries(images)) {
    const source = `public/screenshots/github/${file}`;
    const meta = await sharp(source).metadata();
    if (!meta.width || !meta.height)
        continue;
    const [x, y, w, h] = focus.crop;
    const width = Math.round(meta.width * w), height = Math.round(meta.height * h);
    const crop = sharp(source).extract({ left: Math.round(meta.width * x), top: Math.round(meta.height * y), width, height });
    await crop.composite([{ input: Buffer.from(svg(width, height, focus)), top: 0, left: 0 }]).png().toFile(`public/annotated/github/focus-${file.replace('.png', '')}.png`);
    console.log(`focused ${file}`);
}
