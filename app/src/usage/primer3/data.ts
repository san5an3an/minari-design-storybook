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
];

export interface Secret {
  id: string;
  name: string;
  updatedLabel: string;
}

export const SECRETS: Secret[] = [
  { id: "sc1", name: "NPM_TOKEN", updatedLabel: "1개월 전" },
  { id: "sc2", name: "AWS_ACCESS_KEY_ID", updatedLabel: "3개월 전" },
  { id: "sc3", name: "SLACK_WEBHOOK_URL", updatedLabel: "6개월 전" },
];
