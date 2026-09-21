import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const BOOTSTRAP: LibSpec = {
  title: "React Bootstrap",
  packages: ["react-bootstrap", "bootstrap"],
  themeDir: "bootstrap",
  themeExt: "css",
  importFrom: "react-bootstrap",
  refDir: "bootstrapRef",
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
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
