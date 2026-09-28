import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const CLOUDSCAPE: LibSpec = {
  title: "Cloudscape",
  packages: ["@cloudscape-design/components", "@cloudscape-design/global-styles"],
  themeDir: "cloudscape",
  importFrom: "@cloudscape-design/components",
  refDir: "cloudscapeRef",
  parse: (json) => {
    const d = json as { slug?: string };
    return { componentName: pascal(d.slug ?? ""), props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

import * as React from "react";
import { applyTheme } from "@cloudscape-design/components/theming";

import { byMode } from "./theme";

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
    const theme = byMode[mode];
    if (!theme) return;
    const { reset } = applyTheme({ theme });
    return reset;
  }, [mode]);

  return <>{children}</>;
}
`,
};
