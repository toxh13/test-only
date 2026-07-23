import { lessons } from './content';

const memberImages: Record<string, string> = {
  invite: 'focus-github-04-new-issue', desktop: 'desktop:desktop-01-sign-in-options.png', clone: 'desktop:desktop-04-clone-dialog.png', main: 'desktop:desktop-05-main-fetch.png',
  branch: 'focus-github-06-branches', edit: 'focus-github-08-file-edit', commit: 'focus-github-09-pr-conversation',
  push: 'focus-github-05-pull-requests-tab', pr: 'focus-github-06-new-pull-request', review: 'focus-github-10-files-changed', finish: 'focus-github-14-merged',
};
const leaderImages: Record<string, string> = { repo: 'focus-github-06-branches', invite: 'focus-github-04-new-issue', issue: 'focus-github-04-new-issue', merge: 'focus-github-12-merge' };

for (const lesson of lessons.member) lesson.visual = memberImages[lesson.id];
for (const lesson of lessons.leader) lesson.visual = leaderImages[lesson.id];
