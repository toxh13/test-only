import {lessons} from './content';
const images:Record<string,string>={invite:'github-04-new-issue.png',clone:'github-02-code-button.png',main:'github-01-repository-main.png',branch:'github-07-base-compare.png',edit:'github-08-file-edit.png',pr:'github-06-new-pull-request.png',review:'github-11-review-changes.png',finish:'github-14-merged.png'};
for(const lesson of Object.values(lessons).flat()) lesson.visual=images[lesson.id];
