const repository = process.env.GITHUB_CAPTURE_REPOSITORY;
const allowed = /^https:\/\/github\.com\/toxh13\/github-desktop-guide\/?$/;

if (!repository || !allowed.test(repository)) {
  console.log('안전 중단: GITHUB_CAPTURE_REPOSITORY=https://github.com/toxh13/github-desktop-guide 인 경우에만 캡처 시나리오를 시작합니다.');
  console.log('로그인된 개인 저장소, 실제 팀원 이름, 토큰, 알림이 보이는 화면은 자동 캡처하지 않습니다.');
  process.exit(0);
}

console.log('안전한 데모 저장소 확인됨. Chrome 로그인 세션에서 docs/GITHUB_WEB_CAPTURE_SCENARIO.md 순서대로 수동 캡처하세요.');
console.log('캡처 전 docs/SCREENSHOT_CHECKLIST.md와 docs/PRIVACY_MASKING_GUIDE.md를 확인하고, 원본은 public/ 밖에 보관하세요.');
