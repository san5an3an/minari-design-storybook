import type { LibSpec } from "./registry";

export const DAISYUI: LibSpec = {
  title: "daisyUI",
  packages: ["daisyui", "tailwindcss"],
  themeDir: "daisyui",
  themeExt: "css",
  // 마크업 전용이라 미사용, 타입 충족용 더미 값
  importFrom: "daisyui",
  refDir: "daisyuiRef/docs",
  markup: {
    demosDir: "daisyuiRef/demos",
    demosFormat: "json",
    // 위 주석 참고. 빈 값 유지
    vendorCss: [],
    note: "이 예제의 클래스에는 `d-` 접두가 붙어 있습니다(이 미리보기가 문서를 "
      + "오염시키지 않으려고 켠 daisyUI `prefix` 옵션입니다). 그대로 쓰시려면 Tailwind v4 "
      + "설정에서 같은 접두를 켜 주세요:\n\n"
      + "```css\n@import \"tailwindcss\";\n@plugin \"daisyui\" {\n  prefix: \"d-\";\n}\n```\n\n"
      + "`daisyui/daisyui.css` 를 그대로 `<link>` 로 걸면 안 먹습니다. 그 파일의 "
      + "클래스에는 접두가 없습니다. Tailwind 빌드를 거쳐야 합니다.",
  },
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    return { componentName: (d.title ?? d.slug ?? "").trim, props: [], dropped: [] };
  },
  extras: [],
  // 마크업 전용은 프로바이더 제외. 감쌀 React 트리가 없음
  provider:  => "",
};
