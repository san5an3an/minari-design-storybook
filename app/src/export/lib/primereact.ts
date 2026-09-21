import type { LibExtra, LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const PRIMEREACT: LibSpec = {
  title: "PrimeReact",
  packages: ["primereact", "primeicons"],
  themeDir: "primereact",
  importFrom: (component: string) => `primereact/${component}`,
  refDir: "primereactRef",
  notComponents: ["inputgroup"],
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim.replace(/\s+/g, "") || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [],
  compiledTheme: (slug: string): LibExtra[] =>
    (["light", "dark", "high-contrast"] as const).map((mode) => ({
      from: `app/src/preview/primereactRef/theme/${slug}.${mode}.json`,
      to: `primereact-${mode}.json`,
      why:
        "공식 SASS 를 그 시스템·모드로 미리 컴파일한 CSS(JSON 문자열 모듈). theme.ts(진입 변수 표)"
        + "만으로는 색·모서리·글꼴 전부 미적용. 이 파일이 실제로 생성하는 쪽임.",
    })),
  provider:  => `"use client";

import * as React from "react";

// 세 파일은 CSS 아닌 JSON 문자열 모듈. import 시 파싱된 문자열 반환
import primereactLight from "./primereact-light.json";
import primereactDark from "./primereact-dark.json";
import primereactHighContrast from "./primereact-high-contrast.json";

const CSS: Record<Mode, string> = {
  light: primereactLight,
  dark: primereactDark,
  "high-contrast": primereactHighContrast,
};

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  React.useEffect( => {
    const el = document.createElement("style");
    el.dataset.baseMount = \`primereact:\${mode}\`;
    el.textContent = CSS[mode];
    document.head.appendChild(el);
    return  => el.remove;
  }, [mode]);

  return <>{children}</>;
}
`,
};
