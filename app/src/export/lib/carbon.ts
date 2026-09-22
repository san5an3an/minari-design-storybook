import type { LibSpec } from "./registry";

export const CARBON: LibSpec = {
  title: "Carbon",
  packages: ["@carbon/react", "@carbon/styles"],
  themeDir: "carbon",
  themeExt: "css",
  importFrom: "@carbon/react",
  refDir: "carbonRef",
  parse: (json) => {
    const d = json as { slug?: string };
    // title로 결정되지 않음. 슬러그 비면 임의 이름 사용, import 오류 가능
    return { componentName: (d.slug ?? "").trim, props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

import * as React from "react";

import "@carbon/styles/css/styles.css";
import "./theme.css";

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

  return <>{children}</>;
}
`,
};
