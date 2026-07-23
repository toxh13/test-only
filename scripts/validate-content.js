import { lessons, terms, problems } from '../src/data/content';
const all = Object.values(lessons).flat();
if (!all.length || !terms.length || !problems.length)
    process.exit(1);
for (const l of all)
    for (const v of Object.values(l))
        if (typeof v === 'string' && !v.trim())
            process.exit(1);
console.log(`content ok: ${all.length} lessons, ${problems.length} problems, ${terms.length} terms`);
