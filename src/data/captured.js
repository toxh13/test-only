import { lessons } from './content';
const memberImages = {
    invite: 'focus-github-04-new-issue', clone: 'github-02-code-button.png', main: 'github-01-repository-main.png',
    branch: 'focus-github-06-branches', edit: 'focus-github-08-file-edit', commit: 'focus-github-09-pr-conversation',
    push: 'focus-github-05-pull-requests-tab', pr: 'focus-github-06-new-pull-request',
    review: 'focus-github-10-files-changed', finish: 'focus-github-14-merged'
};
const leaderImages = { repo: 'github-01-repository-main.png', invite: 'focus-github-04-new-issue', issue: 'focus-github-04-new-issue', review: 'focus-github-11-review-changes', merge: 'focus-github-12-merge' };
for (const lesson of lessons.member)
    lesson.visual = memberImages[lesson.id];
for (const lesson of lessons.leader)
    lesson.visual = leaderImages[lesson.id];
