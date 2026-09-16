import type { LibExtra, LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const BLUEPRINT: LibSpec = {
  title: "Blueprint",
  packages: ["@blueprintjs/core"],
  themeDir: "blueprint",
  themeExt: "css",
  importFrom: "@blueprintjs/core",
  refDir: "blueprintRef",
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [],
  // slug 미사용. blueprint 공식 CSS는 스코프만 옮겨 시스템별 값 차이 없음
  compiledTheme: : LibExtra[] => [
    {
      from: "app/src/preview/blueprintRef/theme/blueprint-styles.json",
      to: "blueprint-styles.json",
      why:
        "radius 강제 override(JSON 문자열 모듈, heroui·carbon·primereact 와 같은 모양) + "
        + "blueprint 공식 CSS 를 전역 오염 없이 스코프에 가둔 패널. 지우면 컴포넌트가 CSS 없이(모양 없이) 렌더링.",
    },
  ],
  provider:  => `"use client";

import * as React from "react";

import "./theme.css";
import "./blueprint-styles.json";

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  // data-theme 명시적으로 지정. 안 하면 OS 설정값이 색에 적용될 수 있음
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return <div className="blueprint-ref-scope">{children}</div>;
}
`,
};
