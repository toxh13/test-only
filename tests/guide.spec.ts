import { expect, test } from '@playwright/test';

test('팀원 흐름은 역할 변경과 진행 상태를 저장한다', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: '팀원으로 첫 PR 보내기' })).toBeVisible();
  await page.getByRole('button', { name: '하는 팀장입니다' }).click();
  await expect(page.getByRole('heading', { name: '안전한 작업 흐름 만들기' })).toBeVisible();
  await page.getByRole('button', { name: '하는 팀원입니다' }).click();
  await page.getByRole('checkbox').check();
  await page.reload();
  await expect(page.getByRole('checkbox')).toBeChecked();
});

test('검색 결과로 단계 이동, 문제 검색, 시뮬레이션이 동작한다', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('가이드 검색').fill('Push');
  await page.getByRole('button', { name: /9\. Push로 GitHub에 공유/ }).click();
  await expect(page.getByRole('heading', { name: 'Push로 GitHub에 공유' })).toBeVisible();
  await page.getByRole('button', { name: /Push origin을 눌러 GitHub에 브랜치를 올린다/ }).click();
  await expect(page.getByRole('status')).toContainText('정답입니다');
  await page.getByRole('button', { name: '문제가 생겼나요?' }).click();
  await page.getByLabel('가이드 검색').fill('충돌');
  await expect(page.getByRole('heading', { name: 'Pull 전에 수정해 충돌 발생' })).toBeVisible();
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
  await expect(page.getByText('팀원 7. Changes 탭')).toBeHidden();
  await expect(page.getByText('팀장 4. PR 파일 검토')).toBeVisible();
});
