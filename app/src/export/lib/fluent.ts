import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const FLUENT: LibSpec = {
  title: "Fluent UI",
  packages: ["@fluentui/react-components"],
  themeDir: "fluent",
  importFrom: "@fluentui/react-components",
  refDir: "fluentRef",
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

// Fluent UI 위에 구성한 provider. theme으로 style 직접 추가
import * as React from "react";
import { FluentProvider } from "@fluentui/react-components";

import { byMode } from "./theme";

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  // data-theme 명시적으로 지정. vars.css 다크, 고대비 블록에 필요한 값임
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return <FluentProvider theme={byMode[mode]}>{children}</FluentProvider>;
}
`,
};
