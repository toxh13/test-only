# GitHub 팀프로젝트 실습 가이드

비전공자 팀원을 위한 한국어 화면 중심 가이드입니다.

```bash
npm install
npm run dev
npm run build
npm run test
npm run validate-content
npm run capture
npm run annotate
```

GitHub Pages는 `.github/workflows/deploy.yml`로 배포합니다. Settings → Pages → Source에서 GitHub Actions를 선택하세요. 빌드 시 `404.html`과 `.nojekyll`도 생성해 정적 경로 새로고침을 지원합니다. `npm run annotate`는 원본 캡처에 하이라이트 주석본을 다시 생성합니다. 실제 캡처는 계정·권한·개인정보를 고려해 임의 생성하지 않으며, `docs/`의 시나리오를 따릅니다.
