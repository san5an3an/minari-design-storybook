import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const FLOWBITE: LibSpec = {
  title: "Flowbite React",
  packages: ["flowbite-react", "tailwindcss"],
  themeDir: "flowbite",
  themeExt: "css",
  importFrom: "flowbite-react",
  refDir: "flowbiteRef",
  parse: (json) => {
    const d = json as { slug?: string };
    // title로 결정되지 않음. 위 주석 참고
    return { componentName: pascal(d.slug ?? ""), props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

import * as React from "react";

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
