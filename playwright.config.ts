import { defineConfig, devices } from "@playwright/test";

// PW_PORT 환경변수로 테스트 서버 포트 재지정
const PORT = Number(process.env.PW_PORT ?? 3000);
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  // CI에서만 엄격 적용. 로컬 기본값 유지 시 test.only 있어도 통과할 위험 있음
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // html 리포터 사용 금지, 브라우저 띄우고 리포트 남겨 텍스트 수집에 안 맞음
  reporter: "list",

  use: {
    baseURL: BASE_URL,
    // 실패 시에만 결과 보존. 항상 보존 시 test-results 용량 급증 문제 있음
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "off",
  },

  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],

  webServer: {
    command: "npm run dev",
    url: BASE_URL,
    // 이 행이 3000번 서버 유지 규칙의 본체임
    reuseExistingServer: !process.env.CI,
    // Turbopack도 첫 컴파일에 시간 오래 소요. 의존성 74종이면 기본 60초로는 짧음
    timeout: 180_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
