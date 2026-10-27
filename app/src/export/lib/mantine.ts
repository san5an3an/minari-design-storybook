import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

export const MANTINE: LibSpec = {
  title: "Mantine",
  packages: ["@mantine/core", "@mantine/hooks"],
  themeDir: "mantine",
  importFrom: "@mantine/core",
  refDir: "mantineRef/contract",
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim() || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [
    {
      from: "app/src/bases/mantineVariantColors.ts",
      to: "mantineVariantColors.ts",
      why: "light·subtle 변형 글자색을 이 시스템 글자 토큰으로 잇습니다. "
        + "없으면 다크 모드에서 Badge·현재 메뉴 같은 옅은 변형 글자가 바탕에 묻힙니다",
    },
  ],
  provider: () => `"use client";

import * as React from "react";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { byMode } from "./theme";
import { mantineVariantColors } from "./mantineVariantColors";

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  // data-theme 명시적으로 지정. 안 하면 OS 설정값이 색에 적용될 수 있음
  React.useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <MantineProvider
      theme={byMode[mode]}
      cssVariablesResolver={mantineVariantColors}
      forceColorScheme={mode === "light" ? "light" : "dark"}
    >
      {children}
    </MantineProvider>
  );
}
`,
};
