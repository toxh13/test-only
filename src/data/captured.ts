import { lessons } from './content';

const memberImages: Record<string, string> = {
  invite: 'focus-github-04-new-issue', desktop: 'desktop:desktop-01-sign-in-options.png', clone: 'desktop:desktop-04-clone-dialog.png', main: 'desktop:desktop-05-main-fetch.png',
  branch: 'desktop:desktop-06-branch-menu.png', edit: 'focus-github-08-file-edit', changes: 'desktop:desktop-13-changes-develop.png', commit: 'desktop:desktop-13-changes-develop.png',
  push: 'desktop:desktop-14-push-develop.png', pr: 'desktop:web-01-pr-open.png', review: 'focus-github-10-files-changed', finish: 'desktop:web-04-merged.png',
};
const leaderImages: Record<string, string> = { repo: 'focus-github-06-branches', invite: 'focus-github-04-new-issue', issue: 'focus-github-04-new-issue', rules: 'desktop:desktop-17-rules-active.png', review: 'focus-github-11-review-changes', merge: 'desktop:web-02-merge-ready.png' };

for (const lesson of lessons.member) lesson.visual = memberImages[lesson.id];
for (const lesson of lessons.leader) lesson.visual = leaderImages[lesson.id];
