import { existsSync, readFileSync } from 'node:fs';
import { lessons, problems, terms } from '../src/data/content';
const requiredDocs = ['docs/SCREENSHOT_CHECKLIST.md', 'docs/PRIVACY_MASKING_GUIDE.md', 'docs/CONTENT_SOURCES.md', 'docs/MAINTENANCE_GUIDE.md'];
const all = Object.values(lessons).flat();
const errors = [];
if (all.length < 15 || terms.length < 8 || problems.length < 6)
    errors.push('학습 콘텐츠 최소 수량이 부족합니다.');
for (const lesson of all)
    for (const [key, value] of Object.entries(lesson))
        if (key !== 'visual' && (!value || typeof value !== 'string'))
            errors.push(`${lesson.id}.${key}가 비어 있습니다.`);
for (const lesson of all)
    if (lesson.visual) {
        const filename = lesson.visual.startsWith('focus-') ? `${lesson.visual}.png` : lesson.visual.replace('.png', '-annotated.png');
        if (!existsSync(`public/annotated/github/${filename}`))
            errors.push(`${lesson.id}의 공개 이미지가 없습니다: ${filename}`);
    }
for (const doc of requiredDocs)
    if (!existsSync(doc))
        errors.push(`필수 문서 누락: ${doc}`);
const metadata = JSON.parse(readFileSync('public/screenshots/metadata.json', 'utf8'));
if (metadata.some((item) => item.image.includes('/screenshots/github/') || item.status !== 'masked'))
    errors.push('공개 메타데이터에는 마스킹된 이미지 경로와 masked 상태만 허용합니다.');
if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
}
console.log(`content ok: ${all.length} lessons, ${problems.length} problems, ${terms.length} terms, ${metadata.length} masked captures`);
