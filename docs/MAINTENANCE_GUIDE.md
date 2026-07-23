# 유지보수 가이드

매 분기 또는 GitHub UI 변경 시 다음을 실행합니다.

1. `docs/GITHUB_WEB_CAPTURE_SCENARIO.md`로 데모 저장소 흐름을 재현합니다.
2. `docs/SCREENSHOT_CHECKLIST.md`와 개인정보 마스킹을 확인합니다.
3. `npm run focus-images && npm run validate-content && npm run build && npm test`를 실행합니다.
4. 모바일 폭, 키보드 Escape, 이미지 확대/닫기, 검색, 다운로드, 인쇄를 확인합니다.
5. 변경한 화면의 확인일을 `CONTENT_SOURCES.md`와 metadata에 기록합니다.

이미지·본문·alt 텍스트 중 하나만 바꾸지 않습니다. 모두 같은 UI 상태를 설명해야 합니다.
