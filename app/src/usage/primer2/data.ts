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
];

export interface DownloadStat {
  packageName: string;
  weeklyDownloads: number;
  trendPercent: number;
}

export const DOWNLOAD_STATS: DownloadStat[] = [
  { packageName: "@minari/icons", weeklyDownloads: 89430, trendPercent: 12 },
  { packageName: "@minari/tokens", weeklyDownloads: 48210, trendPercent: 4 },
  { packageName: "@minari/grid", weeklyDownloads: 12870, trendPercent: -3 },
];
