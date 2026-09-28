export interface WorkflowRun {
  id: string;
  name: string;
  trigger: string;
  status: "성공" | "실패" | "실행 중";
  branch: string;
  durationLabel: string;
  timeLabel: string;
  log: string[];
}

export const WORKFLOWS: WorkflowRun[] = [
  {
    id: "wf1", name: "CI, 테스트 스위트", trigger: "push", status: "성공", branch: "develop",
    durationLabel: "3분 12초", timeLabel: "10분 전",
    log: [
      "$ npm ci",
      "added 842 packages in 24s",
      "$ npm test",
      "PASS  src/components/Button.test.tsx",
      "PASS  src/components/Card.test.tsx",
      "Test Suites: 24 passed, 24 total",
    ],
  },
  {
    id: "wf2", name: "배포, 스테이징", trigger: "workflow_dispatch", status: "실행 중", branch: "release-2.4",
    durationLabel: "진행 중", timeLabel: "2분 전",
    log: [
      "$ docker build -t app:staging .",
      "Step 4/9 : COPY . .",
      "Step 5/9 : RUN npm run build",
    ],
  },
  {
    id: "wf3", name: "CI, 린트", trigger: "pull_request", status: "실패", branch: "feature/token-diff",
    durationLabel: "48초", timeLabel: "1시간 전",
    log: [
      "$ npm run lint",
      "src/tokens/resolve.ts",
      "  42:1  error  'foo' is defined but never used",
      "✖ 1 problem (1 error, 0 warnings)",
      "Error: Process completed with exit code 1.",
    ],
  },
  {
    id: "wf4", name: "야간 회귀 테스트", trigger: "schedule", status: "성공", branch: "main",
    durationLabel: "18분 4초", timeLabel: "어제",
    log: [
      "$ npm run test:e2e",
      "Running 128 tests using 4 workers",
      "128 passed (18m)",
    ],
  },
  {
    id: "wf5", name: "배포, 프로덕션", trigger: "workflow_dispatch", status: "성공", branch: "main",
    durationLabel: "5분 40초", timeLabel: "2일 전",
    log: [
      "$ docker build -t app:prod .",
      "Step 9/9 : ENTRYPOINT [\"node\", \"server.js\"]",
      "Successfully tagged app:prod",
      "$ kubectl rollout status deployment/app",
      "deployment \"app\" successfully rolled out",
    ],
  },
  {
    id: "wf6", name: "CI, 타입 체크", trigger: "pull_request", status: "실패", branch: "feature/token-diff",
    durationLabel: "1분 2초", timeLabel: "1시간 전",
    log: [
      "$ npm run typecheck",
      "src/tokens/resolve.ts(42,7): error TS2322: Type 'string' is not assignable to type 'number'.",
      "Found 1 error.",
    ],
  },
  {
    id: "wf7", name: "CI, 테스트 스위트", trigger: "push", status: "성공", branch: "feature/select-panel-a11y",
    durationLabel: "2분 58초", timeLabel: "2시간 전",
    log: [
      "$ npm ci", "added 842 packages in 21s", "$ npm test",
      "PASS  src/components/SelectPanel.test.tsx",
      "Test Suites: 25 passed, 25 total",
    ],
  },
  {
    id: "wf8", name: "문서 사이트 배포", trigger: "push", status: "성공", branch: "main",
    durationLabel: "1분 40초", timeLabel: "6시간 전",
    log: [
      "$ npm run docs:build", "Build complete in 58s",
      "$ vercel deploy --prod", "✓ Deployed to https://docs.minari.dev",
    ],
  },
  {
    id: "wf9", name: "의존성 취약점 스캔", trigger: "schedule", status: "실패", branch: "main",
    durationLabel: "1분 5초", timeLabel: "어제",
    log: [
      "$ npm audit --audit-level=high",
      "found 1 high severity vulnerability in axe-core",
      "Error: Process completed with exit code 1.",
    ],
  },
  {
    id: "wf10", name: "CI, 린트", trigger: "pull_request", status: "성공", branch: "feature/select-panel-a11y",
    durationLabel: "39초", timeLabel: "2시간 전",
    log: ["$ npm run lint", "✔ No ESLint warnings or errors"],
  },
];

export interface Secret {
  id: string;
  name: string;
  updatedLabel: string;
  // RelativeTime 계산용 ISO 날짜, updatedLabel과 별개로 처리
  updatedAt: string;
}

export const SECRETS: Secret[] = [
  { id: "sc1", name: "NPM_TOKEN", updatedLabel: "1개월 전", updatedAt: "2026-08-17T09:00:00Z" },
  { id: "sc2", name: "AWS_ACCESS_KEY_ID", updatedLabel: "3개월 전", updatedAt: "2026-06-17T09:00:00Z" },
  { id: "sc3", name: "SLACK_WEBHOOK_URL", updatedLabel: "6개월 전", updatedAt: "2026-03-17T09:00:00Z" },
  { id: "sc4", name: "DOCKER_REGISTRY_TOKEN", updatedLabel: "2주 전", updatedAt: "2026-09-03T09:00:00Z" },
  { id: "sc5", name: "SENTRY_DSN", updatedLabel: "2개월 전", updatedAt: "2026-07-17T09:00:00Z" },
  { id: "sc6", name: "VERCEL_DEPLOY_HOOK", updatedLabel: "4개월 전", updatedAt: "2026-05-17T09:00:00Z" },
  { id: "sc7", name: "CODECOV_TOKEN", updatedLabel: "5일 전", updatedAt: "2026-09-12T09:00:00Z" },
  { id: "sc8", name: "DATABASE_URL", updatedLabel: "1주 전", updatedAt: "2026-09-10T09:00:00Z" },
  { id: "sc9", name: "OPENAI_API_KEY", updatedLabel: "3주 전", updatedAt: "2026-08-27T09:00:00Z" },
  { id: "sc10", name: "CLOUDFLARE_API_TOKEN", updatedLabel: "5개월 전", updatedAt: "2026-04-17T09:00:00Z" },
];
