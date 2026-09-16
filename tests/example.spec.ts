import { test, expect } from "@playwright/test";

test("해시 주소로 곧장 들어가면 그 화면이 렌더링됨", async ({ page }) => {
  await page.goto("/#/shadcn/01-cobalt/button");

  await expect(page.locator("h1")).toHaveText("Cobalt");
  await expect(page.locator("h2").first).toHaveText("Button");
});

test("해시만 바꿔도 화면이 따라옴. 다시 열지 않음", async ({ page }) => {
  await page.goto("/#/shadcn/01-cobalt/button");
  await expect(page.locator("h1")).toHaveText("Cobalt");

  // 클릭 대신 해시 직접 변경, 라우팅 비용 유지 확인 테스트
  await page.evaluate( => {
    window.location.hash = "#/mui/05-plum/card";
  });

  await expect(page).toHaveURL(/#\/mui\/05-plum\/card$/);
  await expect(page.locator("h1")).toHaveText("Plum");
  await expect(page.locator("h2").first).toHaveText("Card");
});

test("?mode=dark 는 통째로 다시 열어야 적용됨", async ({ page }) => {
  // 모드 변경 시 전체 재로드. 쿼리 문자열 기반이라 해시 변경은 미반영
  await page.goto("/?mode=dark#/mui/05-plum/card");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("h1")).toHaveText("Plum");
});
