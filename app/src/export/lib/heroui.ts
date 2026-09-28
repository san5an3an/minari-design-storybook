import type { LibExtra, LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const HEROUI: LibSpec = {
  title: "HeroUI",
  packages: ["@heroui/react"],
  themeDir: "heroui",
  themeExt: "css",
  importFrom: "@heroui/react",
  refDir: "herouiRef",
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [],
  // 슬러그 무관 단일 산출물, var 참조만 포함, slug 인자 제외
  compiledTheme: : LibExtra[] => [
    {
      from: "app/src/preview/herouiRef/theme/heroui-styles.json",
      to: "heroui-styles.json",
      why:
        "모서리·여백·글꼴·색을 이 시스템의 값으로 맞춰 줍니다. "
        + "지우면 HeroUI 기본값(테두리 없음, 다른 여백 크기)으로 돌아갑니다.",
    },
  ],
  provider:  => `"use client";

import * as React from "react";
import { UNSAFE_PortalProvider } from "react-aria";

import "./theme.css";
import "./heroui-styles.json";

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  const cell = React.useRef<HTMLDivElement>(null);
  const getContainer = React.useCallback( => cell.current, []);

  // data-theme 명시적으로 지정. 안 하면 OS 설정값이 색에 적용될 수 있음
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <div ref={cell} className="heroui-ref-scope" style={{ position: "relative" }}>
      <UNSAFE_PortalProvider getContainer={getContainer}>{children}</UNSAFE_PortalProvider>
    </div>
  );
}
`,
};
