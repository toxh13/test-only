import { expect, test } from '@playwright/test';

test('역할 변경과 진행 상태를 저장한다', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: '팀원으로 첫 PR 보내기' })).toBeVisible();
  await page.getByRole('button', { name: '하는 팀장입니다' }).click();
  await expect(page.getByRole('heading', { name: '안전한 작업 흐름 만들기' })).toBeVisible();
  await page.getByRole('button', { name: '하는 팀원입니다' }).click();
  await page.getByRole('checkbox').check();
  await page.reload();
  await expect(page.getByRole('checkbox')).toBeChecked();
});

test('단계 이동, 문제 안내, 시뮬레이션이 동작한다', async ({ page }) => {
  await page.goto('/');
  await page.locator('.row').filter({ hasText: 'Push로 GitHub에 공유' }).click();
  await expect(page.getByRole('heading', { name: 'Push로 GitHub에 공유' })).toBeVisible();
  await page.getByRole('button', { name: /Push origin을 눌러 GitHub에 브랜치를 올린다/ }).click();
  await expect(page.getByRole('status')).toContainText('정답입니다');
  await page.getByRole('button', { name: '문제가 생겼나요?' }).click();
  await expect(page.getByRole('heading', { name: '문제가 생겼나요?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '저장소가 보이지 않음' })).toBeVisible();
});

test('마스킹 이미지 확대 모달은 Escape로 닫힌다', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '초대 수락 이미지 확대 보기' }).click();
  await expect(page.getByRole('dialog', { name: '스크린샷 확대 보기' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('GitHub Desktop 탭은 실제 화면과 남은 촬영 장면을 안내한다', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'GitHub Desktop' }).first().click();
  await expect(page.getByRole('heading', { name: '버튼으로 배우는 GitHub Desktop' })).toBeVisible();
  await expect(page.getByAltText('GitHub Desktop Options의 Sign in to GitHub.com 버튼 강조 화면')).toBeVisible();
  await expect(page.getByText('팀장 4. PR 파일 검토')).toBeVisible();
});

test('깃허브란 탭은 GitHub와 Desktop의 역할을 설명한다', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '깃허브란?' }).click();
  await expect(page.getByRole('heading', { name: '깃허브란?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'GitHub Desktop은 무엇인가요?' })).toBeVisible();
  await expect(page.getByRole('link', { name: /GitHub Desktop 공식 다운로드/ })).toHaveAttribute('href', 'https://desktop.github.com/');
});

test('팀장 4번은 실제 적용한 규칙 화면을 보여준다', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '하는 팀장입니다' }).click();
  await page.getByRole('button', { name: /공동 규칙 합의/ }).click();
  await expect(page.getByAltText(/공동 규칙 합의/)).toBeVisible();
});
