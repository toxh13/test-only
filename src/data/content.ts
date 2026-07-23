export type Role = 'member' | 'leader';

export type Lesson = {
  id: string;
  title: string;
  tool: 'GitHub Desktop' | 'GitHub 웹' | 'VS Code';
  action: string;
  why: string;
  success: string;
  mistake: string;
  recovery: string;
  visual?: string;
};

const member: Lesson[] = [
  { id: 'invite', title: '초대 수락', tool: 'GitHub 웹', action: '메일 또는 GitHub 알림의 “Accept invitation”을 눌러 저장소에 참여합니다.', why: '초대를 수락해야 팀 저장소와 Issue를 볼 수 있습니다.', success: 'Repositories 목록에서 팀 저장소가 보입니다.', mistake: '다른 GitHub 계정으로 로그인해 저장소가 보이지 않습니다.', recovery: '초대를 받은 계정인지 확인한 뒤 다시 로그인합니다.', visual: 'focus-github-04-new-issue' },
  { id: 'desktop', title: 'GitHub Desktop 로그인', tool: 'GitHub Desktop', action: 'GitHub Desktop을 설치하고 File → Options에서 GitHub 계정으로 로그인합니다.', why: '처음에는 명령어보다 버튼으로 변경·Commit·Push를 구분하는 편이 안전합니다.', success: '왼쪽 위 Current repository 메뉴가 보입니다.', mistake: '웹 로그인 계정과 Desktop 로그인 계정이 다릅니다.', recovery: 'Desktop의 Options에서 계정을 확인하고 올바른 계정으로 Sign out / Sign in 합니다.' },
  { id: 'clone', title: '저장소를 내 컴퓨터로 복사', tool: 'GitHub Desktop', action: 'File → Clone repository에서 팀 저장소를 선택하고, 찾기 쉬운 폴더에 Clone 합니다.', why: 'Clone은 팀의 파일과 변경 기록을 내 컴퓨터에 가져오는 일입니다.', success: 'Current repository에 팀 저장소 이름이 표시됩니다.', mistake: '압축 파일을 내려받아 변경 기록 없이 작업합니다.', recovery: '압축 파일 대신 Clone을 다시 실행합니다.', visual: 'github-02-code-button.png' },
  { id: 'main', title: 'main 최신 상태 확인', tool: 'GitHub Desktop', action: 'Current branch가 main인지 확인하고 Fetch origin을 누릅니다. Pull origin이 보이면 이어서 누릅니다.', why: '다른 팀원의 최신 변경을 받지 않으면 나중에 충돌이 생길 수 있습니다.', success: 'Fetch origin이 다시 보이거나 “Already up to date” 상태가 됩니다.', mistake: 'main에서 바로 파일을 수정합니다.', recovery: '변경이 없다면 새 브랜치를 만듭니다. 이미 변경했다면 팀장에게 먼저 알립니다.', visual: 'github-01-repository-main.png' },
  { id: 'branch', title: '내 작업 브랜치 만들기', tool: 'GitHub Desktop', action: 'Current branch → New branch에서 Issue 번호를 포함해 feature/1-member-intro처럼 이름을 정합니다.', why: 'branch는 main을 안전하게 두고 내 작업만 분리하는 공간입니다.', success: 'Current branch가 새 브랜치 이름으로 바뀝니다.', mistake: '브랜치 이름에 공백 또는 작업 내용을 알 수 없는 이름을 씁니다.', recovery: 'feature/이슈번호-짧은-작업명 형식으로 새로 만듭니다.', visual: 'focus-github-06-branches' },
  { id: 'edit', title: '파일을 한 가지 목적만 수정', tool: 'VS Code', action: 'members/내이름.md를 만들고 소개 문장처럼 Issue에 적힌 범위만 수정합니다.', why: '한 PR에 목적이 하나면 검토와 되돌리기가 쉽습니다.', success: 'VS Code에서 저장한 파일이 GitHub Desktop Changes 목록에 나타납니다.', mistake: '무관한 파일을 함께 고치거나 비밀번호·API 키를 붙여넣습니다.', recovery: '무관한 파일은 되돌리고, 민감정보는 즉시 삭제한 뒤 팀장에게 알립니다.', visual: 'focus-github-08-file-edit' },
  { id: 'changes', title: '변경 파일과 차이 확인', tool: 'GitHub Desktop', action: 'Changes 탭에서 파일 이름과 초록색/빨간색 줄을 읽고, 의도한 파일만 선택합니다.', why: 'Commit 전 확인은 실수를 발견하는 가장 싼 순간입니다.', success: '수정 목적과 관계없는 파일이 선택되어 있지 않습니다.', mistake: '자동 생성 파일이나 개인 설정 파일을 모르고 포함합니다.', recovery: '해당 파일을 체크 해제하거나 Discard changes 전에 내용을 다시 확인합니다.' },
  { id: 'commit', title: 'Commit으로 내 컴퓨터에 기록', tool: 'GitHub Desktop', action: 'Summary에 “Add member introduction”처럼 한 줄로 적고 Commit to feature/…를 누릅니다.', why: 'Commit은 내 컴퓨터의 변경을 설명과 함께 기록하는 일입니다. 아직 GitHub에는 올라가지 않습니다.', success: 'Changes 목록이 비고 History에 새 Commit이 보입니다.', mistake: 'Commit과 Push가 같은 일이라고 생각합니다.', recovery: 'Commit 뒤에는 반드시 Publish branch 또는 Push origin 단계가 남았는지 확인합니다.', visual: 'focus-github-09-pr-conversation' },
  { id: 'push', title: 'Push로 GitHub에 공유', tool: 'GitHub Desktop', action: '처음이면 Publish branch, 이후에는 Push origin을 눌러 브랜치를 GitHub에 올립니다.', why: 'Push를 해야 팀원이 브랜치와 Commit을 보고 PR을 열 수 있습니다.', success: 'Push 버튼이 Fetch origin으로 바뀌고 GitHub에서 브랜치가 보입니다.', mistake: 'Commit만 하고 팀원에게 작업이 끝났다고 알립니다.', recovery: 'History를 확인한 뒤 Push origin을 누르고 GitHub 웹에서 브랜치를 확인합니다.', visual: 'focus-github-05-pull-requests-tab' },
  { id: 'pr', title: 'Pull Request로 검토 요청', tool: 'GitHub 웹', action: 'Pull requests → New pull request에서 base: main, compare: 내 브랜치를 확인한 뒤 제목·설명·Issue 번호를 적습니다.', why: 'PR은 내 변경을 main에 넣어도 되는지 팀에게 검토받는 요청입니다.', success: 'Conversation과 Files changed 탭이 있는 열린 PR이 생성됩니다.', mistake: 'base와 compare를 반대로 골라 다른 방향의 PR을 만듭니다.', recovery: '병합 전이라면 잘못된 PR을 닫고 올바른 방향으로 새 PR을 만듭니다.', visual: 'focus-github-06-new-pull-request' },
  { id: 'review', title: '리뷰 의견 반영과 답변', tool: 'GitHub 웹', action: 'Comments에서 요청을 읽고 같은 브랜치에서 수정 → Commit → Push합니다. 처리한 의견에는 무엇을 바꿨는지 답합니다.', why: '같은 브랜치에 Push하면 기존 PR이 자동으로 갱신됩니다.', success: 'PR Conversation에 새 Commit과 답변이 함께 보입니다.', mistake: '새 PR을 만들거나 답변 없이 수정만 합니다.', recovery: '기존 PR의 브랜치인지 확인하고, 수정 이유를 짧게 댓글로 남깁니다.', visual: 'focus-github-10-files-changed' },
  { id: 'finish', title: '병합 뒤 main 정리', tool: 'GitHub Desktop', action: 'PR이 Merged인지 확인한 뒤 main으로 전환하고 Pull origin을 누릅니다. 이제 사용한 작업 브랜치를 삭제합니다.', why: '다음 작업은 최신 main에서 시작해야 충돌을 줄일 수 있습니다.', success: 'main이 최신이고 완료한 feature 브랜치가 정리됩니다.', mistake: '병합 전 브랜치를 지우거나 오래된 main에서 다음 작업을 시작합니다.', recovery: 'Merged 상태를 먼저 확인하고, 새 작업 전 Fetch/Pull을 습관으로 만듭니다.', visual: 'focus-github-14-merged' },
];

const leader: Lesson[] = [
  { id: 'repo', title: '저장소의 시작점 준비', tool: 'GitHub 웹', action: 'README에 프로젝트 목적·실행 방법을 적고 .gitignore와 기본 폴더를 확인합니다.', why: '팀원이 같은 기준에서 시작합니다.', success: '처음 온 사람이 README만 보고 프로젝트를 이해합니다.', mistake: 'README 없이 구두 설명에만 의존합니다.', recovery: '목적, 실행 방법, 역할, 문의 방법을 README에 추가합니다.', visual: 'github-01-repository-main.png' },
  { id: 'invite', title: '팀원을 권한과 함께 초대', tool: 'GitHub 웹', action: 'Settings → Collaborators에서 팀원을 초대하고, 초대 수락 여부를 확인합니다.', why: '권한 문제를 작업 시작 전에 막습니다.', success: '초대가 Accepted 상태이고 팀원이 저장소를 볼 수 있습니다.', mistake: '사용자 이름을 추측해서 다른 사람을 초대합니다.', recovery: '초대 전 GitHub 사용자 이름을 다시 받습니다.', visual: 'focus-github-04-new-issue' },
  { id: 'issue', title: '작업을 Issue로 작게 나누기', tool: 'GitHub 웹', action: 'Issue 하나에는 목표, 완료 기준, 담당자, 관련 파일을 적습니다.', why: '작업 범위와 PR의 이유가 분명해집니다.', success: '누가 무엇을 언제 끝낼지 한 화면에서 보입니다.', mistake: '“기능 만들기”처럼 큰 작업 하나만 만듭니다.', recovery: '완료 기준을 가진 작은 작업으로 나누고 번호를 붙입니다.', visual: 'focus-github-04-new-issue' },
  { id: 'rules', title: '공동 규칙 합의', tool: 'GitHub 웹', action: '브랜치 이름, Commit 메시지, PR 템플릿, main 직접 Push 금지를 팀 규칙에 적습니다.', why: '충돌보다 더 잦은 “기준 불일치”를 줄입니다.', success: '팀원이 작업 시작 체크리스트를 내려받아 사용합니다.', mistake: '규칙을 채팅에만 남겨 나중에 찾지 못합니다.', recovery: '저장소의 TEAM_GITHUB_RULES.md에 규칙을 옮깁니다.' },
  { id: 'review', title: 'PR을 파일 단위로 검토', tool: 'GitHub 웹', action: 'Files changed에서 목표와 관계없는 변경, 민감정보, 실행 오류를 확인한 뒤 Comment·Approve·Request changes 중 하나를 선택합니다.', why: '검토는 사람을 평가하는 일이 아니라 main을 안전하게 지키는 절차입니다.', success: '승인 또는 변경 요청의 근거가 PR에 남습니다.', mistake: 'Conversation만 읽고 파일 변경을 보지 않습니다.', recovery: '항상 Files changed 탭을 먼저 확인합니다.', visual: 'focus-github-11-review-changes' },
  { id: 'merge', title: '병합·공지·정리', tool: 'GitHub 웹', action: '필수 검토와 CI 결과를 확인하고 Merge합니다. 병합한 내용과 다음 작업을 팀에 알리고 브랜치를 정리합니다.', why: '병합 후의 최신 기준을 모두가 알아야 합니다.', success: 'PR은 Merged이고 Issue·공지·브랜치 상태가 일치합니다.', mistake: '검토 요청이 남았는데 Merge합니다.', recovery: '필수 검토를 마친 뒤 Merge하고, 실수라면 즉시 되돌리는 PR을 만듭니다.', visual: 'focus-github-12-merge' },
];

export const lessons: Record<Role, Lesson[]> = { member, leader };
export const terms = [
  ['Repository', '프로젝트 파일과 변경 기록을 함께 보관하는 GitHub 공간'], ['main', '팀이 공유하는 기준 브랜치. 직접 수정하지 않고 검토된 PR만 병합합니다.'], ['Branch', 'main을 건드리지 않고 한 작업을 진행하는 분리된 작업 공간'], ['Commit', '내 컴퓨터에 남기는 변경 기록'], ['Push', '내 컴퓨터의 Commit을 GitHub에 올리는 일'], ['Fetch', 'GitHub에 새 변경이 있는지만 확인하는 일'], ['Pull', 'GitHub의 최신 변경을 내 컴퓨터로 가져오는 일'], ['Pull Request', '내 브랜치의 변경을 main에 넣기 전에 검토를 요청하는 화면'], ['Conflict', '같은 부분을 서로 다르게 고쳐 Git이 자동 선택하지 못하는 상태'],
];
export const problems = [
  ['저장소가 보이지 않음', '초대 미수락, 다른 계정 로그인', '초대를 받은 계정인지 확인 → Accept invitation → 새로고침', '초대를 수락해도 보이지 않거나 권한 오류가 반복될 때'],
  ['Push 권한 오류', '쓰기 권한이 없거나 Desktop 계정이 다름', 'GitHub 웹 계정과 Desktop 계정 확인 → 팀장에게 정확한 사용자 이름과 오류 화면 전달', '계정이 맞는데도 403·권한 오류가 날 때'],
  ['Commit은 했는데 GitHub에 없음', 'Push 또는 Publish branch를 하지 않음', 'GitHub Desktop History 확인 → Push origin / Publish branch 클릭', 'Push가 실패하거나 버튼이 비활성일 때'],
  ['Pull 전에 수정해 충돌 발생', '오래된 main에서 같은 줄을 수정', '무작정 Accept하지 않기 → 변경 의도 확인 → 팀원과 한 버전 선택 → 테스트', '어느 변경을 남길지 판단할 수 없을 때'],
  ['PR 방향이 이상함', 'base와 compare를 반대로 선택', 'base: main, compare: 내 feature 브랜치인지 확인 → 병합 전 잘못된 PR 닫기', '이미 리뷰가 시작됐거나 연결 Issue가 복잡할 때'],
  ['비밀번호·API 키를 Commit함', '민감정보를 코드나 설정 파일에 붙여넣음', '즉시 팀장에게 알림 → 키를 폐기·재발급 → 노출 범위를 확인', 'Push가 끝났거나 실제 서비스 키가 노출됐을 때'],
];
export const templates = {
  'WORK_START_CHECKLIST.md': '# 작업 시작 체크리스트\n\n- [ ] Issue 목표와 완료 기준을 읽었다\n- [ ] main에서 Fetch/Pull을 했다\n- [ ] `feature/이슈번호-작업명` 브랜치를 만들었다\n',
  'WORK_COMPLETE_CHECKLIST.md': '# 작업 완료 체크리스트\n\n- [ ] 변경 파일과 차이를 확인했다\n- [ ] 민감정보와 무관한 파일이 없다\n- [ ] Commit을 남겼다\n- [ ] Push/Publish branch를 했다\n- [ ] Pull Request를 만들고 Issue를 연결했다\n',
  'PULL_REQUEST_TEMPLATE.md': '## 변경 내용\n\n<!-- 무엇을 왜 바꿨나요? -->\n\n## 관련 Issue\n\nCloses #\n\n## 확인\n\n- [ ] 변경 파일을 확인했다\n- [ ] 민감정보가 없다\n- [ ] 실행 또는 테스트를 확인했다\n',
};
