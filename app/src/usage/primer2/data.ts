export interface PackageVersion {
  version: string;
  publishedLabel: string;
}

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  latestVersion: string;
  weeklyDownloads: number;
  license: string;
  versions: PackageVersion[];
  dependencies: string[];
}

export const PACKAGES: PackageItem[] = [
  {
    id: "pk1", name: "@minari/tokens", description: "디자인 토큰을 CSS 변수로 내려주는 런타임.",
    latestVersion: "3.4.1", weeklyDownloads: 48210, license: "MIT",
    versions: [
      { version: "3.4.1", publishedLabel: "3일 전" },
      { version: "3.4.0", publishedLabel: "3주 전" },
      { version: "3.3.2", publishedLabel: "2개월 전" },
    ],
    dependencies: ["culori", "tinycolor2"],
  },
  {
    id: "pk2", name: "@minari/grid", description: "반응형 그리드 레이아웃 헬퍼.",
    latestVersion: "1.9.0", weeklyDownloads: 12870, license: "MIT",
    versions: [
      { version: "1.9.0", publishedLabel: "1주 전" },
      { version: "1.8.3", publishedLabel: "1개월 전" },
    ],
    dependencies: ["clsx"],
  },
  {
    id: "pk3", name: "@minari/icons", description: "아이콘 스프라이트와 리액트 래퍼.",
    latestVersion: "5.2.0", weeklyDownloads: 89430, license: "Apache-2.0",
    versions: [
      { version: "5.2.0", publishedLabel: "오늘" },
      { version: "5.1.4", publishedLabel: "2주 전" },
      { version: "5.1.3", publishedLabel: "1개월 전" },
      { version: "5.0.0", publishedLabel: "3개월 전" },
    ],
    dependencies: [],
  },
  {
    id: "pk4", name: "@minari/motion", description: "토큰 기반 트랜지션·이징 프리셋.",
    latestVersion: "0.8.2", weeklyDownloads: 6320, license: "MIT",
    versions: [
      { version: "0.8.2", publishedLabel: "5일 전" },
      { version: "0.8.0", publishedLabel: "1개월 전" },
    ],
    dependencies: ["clsx"],
  },
  {
    id: "pk5", name: "@minari/a11y", description: "접근성 린트 규칙과 axe 러너 래퍼.",
    latestVersion: "2.1.0", weeklyDownloads: 21040, license: "Apache-2.0",
    versions: [
      { version: "2.1.0", publishedLabel: "2주 전" },
      { version: "2.0.4", publishedLabel: "2개월 전" },
      { version: "2.0.0", publishedLabel: "4개월 전" },
    ],
    dependencies: ["axe-core"],
  },
  {
    id: "pk6", name: "@minari/forms", description: "폼 검증·에러 메시지 헬퍼 훅 모음.",
    latestVersion: "1.3.0", weeklyDownloads: 9840, license: "MIT",
    versions: [
      { version: "1.3.0", publishedLabel: "6일 전" },
      { version: "1.2.1", publishedLabel: "1개월 전" },
    ],
    dependencies: ["clsx"],
  },
  {
    id: "pk7", name: "@minari/charts", description: "토큰 색을 그대로 쓰는 경량 차트 컴포넌트.",
    latestVersion: "0.5.1", weeklyDownloads: 4210, license: "MIT",
    versions: [
      { version: "0.5.1", publishedLabel: "2일 전" },
      { version: "0.5.0", publishedLabel: "3주 전" },
    ],
    dependencies: ["d3-scale"],
  },
  {
    id: "pk8", name: "@minari/cli", description: "토큰·컴포넌트 스캐폴딩 CLI.",
    latestVersion: "4.0.3", weeklyDownloads: 15680, license: "MIT",
    versions: [
      { version: "4.0.3", publishedLabel: "4일 전" },
      { version: "4.0.0", publishedLabel: "1개월 전" },
      { version: "3.9.1", publishedLabel: "3개월 전" },
    ],
    dependencies: ["commander", "prompts"],
  },
  {
    id: "pk9", name: "@minari/eslint-config", description: "저장소 전역 ESLint 규칙 프리셋.",
    latestVersion: "2.2.0", weeklyDownloads: 31200, license: "MIT",
    versions: [
      { version: "2.2.0", publishedLabel: "1주 전" },
      { version: "2.1.0", publishedLabel: "2개월 전" },
    ],
    dependencies: ["eslint"],
  },
  {
    id: "pk10", name: "@minari/testing", description: "컴포넌트 스냅샷·접근성 테스트 유틸.",
    latestVersion: "1.0.4", weeklyDownloads: 7120, license: "Apache-2.0",
    versions: [
      { version: "1.0.4", publishedLabel: "5일 전" },
      { version: "1.0.0", publishedLabel: "2개월 전" },
    ],
    dependencies: ["@testing-library/react", "axe-core"],
  },
];

export interface DownloadStat {
  packageName: string;
  weeklyDownloads: number;
  trendPercent: number;
  // 월~일 7일 다운로드 수, 합계는 weeklyDownloads 근사값
  dailyDownloads: number[];
}

export const DOWNLOAD_STATS: DownloadStat[] = [
  {
    packageName: "@minari/icons", weeklyDownloads: 89430, trendPercent: 12,
    dailyDownloads: [11200, 13850, 14900, 12100, 15680, 11400, 10300],
  },
  {
    packageName: "@minari/tokens", weeklyDownloads: 48210, trendPercent: 4,
    dailyDownloads: [6100, 7420, 7980, 6540, 8100, 6050, 6020],
  },
  {
    packageName: "@minari/grid", weeklyDownloads: 12870, trendPercent: -3,
    dailyDownloads: [2100, 1780, 1920, 1650, 2040, 1690, 1690],
  },
  {
    packageName: "@minari/eslint-config", weeklyDownloads: 31200, trendPercent: 7,
    dailyDownloads: [4200, 4550, 4700, 4380, 4600, 4380, 4390],
  },
  {
    packageName: "@minari/a11y", weeklyDownloads: 21040, trendPercent: 2,
    dailyDownloads: [3100, 2980, 3050, 2900, 3020, 2990, 3000],
  },
];
