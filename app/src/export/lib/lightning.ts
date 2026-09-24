import type { LibSpec } from "./registry";

export const LIGHTNING: LibSpec = {
  title: "Lightning Design System",
  packages: ["@salesforce-ux/design-system"],
  themeDir: "lightning",
  themeExt: "css",
  // 마크업 전용은 미사용 값, 타입 충족용. markup 있으면 importFrom 안 읽음
  importFrom: "@salesforce-ux/design-system",
  refDir: "lightningRef/contract",
  notComponents: ["_meta", "_nav"],
  markup: {
    // 슬러그 모듈은 한 줄 JSON 형태로 자동 생성
    demosDir: "lightningRef/demos",
    demosFormat: "ts-const",
    vendorCss: ["./node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css"],
    note: "예제가 `/assets/icons/**/symbols.svg` 스프라이트를 부릅니다. "
      + "`@salesforce-ux/design-system/assets/` 를 정적 경로(`/assets`)에 놓아야 아이콘이 보입니다. "
      + "안 놓으면 레이아웃은 맞는데 아이콘만 조용히 빕니다.",
  },
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    return { componentName: (d.title ?? d.slug ?? "").trim, props: [], dropped: [] };
  },
  extras: [],
  // 마크업 전용은 프로바이더 제외. 감쌀 React 트리가 없음
  provider:  => "",
};
