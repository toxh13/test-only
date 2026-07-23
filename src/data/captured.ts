import { lessons } from './content';

const memberImages: Record<string, string> = {
  invite: 'focus-github-04-new-issue', desktop: 'desktop:desktop-01-sign-in-options.png', clone: 'desktop:desktop-04-clone-dialog.png', main: 'desktop:desktop-05-main-fetch.png',
  branch: 'desktop:desktop-06-branch-menu.png', edit: 'focus-github-08-file-edit', changes: 'desktop:desktop-08-changes-commit.png', commit: 'desktop:desktop-08-changes-commit.png',
  push: 'desktop:desktop-09-push-origin.png', pr: 'focus-github-06-new-pull-request', review: 'focus-github-10-files-changed', finish: 'focus-github-14-merged',
};
const leaderImages: Record<string, string> = { repo: 'focus-github-06-branches', invite: 'focus-github-04-new-issue', issue: 'focus-github-04-new-issue', merge: 'focus-github-12-merge' };

for (const lesson of lessons.member) lesson.visual = memberImages[lesson.id];
for (const lesson of lessons.leader) lesson.visual = leaderImages[lesson.id];
