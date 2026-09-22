import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const CHAKRA: LibSpec = {
  title: "Chakra UI",
  // @emotion/react 3.36.1+ 필요. 없으면 동작하지 않음
  packages: ["@chakra-ui/react", "@emotion/react"],
  themeDir: "chakra",
  importFrom: "@chakra-ui/react",
  refDir: "chakraRef",
  parse: (json) => {
    const d = json as { slug?: string };
    return { componentName: pascal(d.slug ?? ""), props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

import * as React from "react";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

import { byMode } from "./theme";

export type Mode = "light" | "dark" | "high-contrast";

const SYSTEMS: Partial<Record<Mode, ReturnType<typeof createSystem>>> = {};
function systemFor(mode: Mode) {
  return (SYSTEMS[mode] ??= createSystem(defaultConfig, byMode[mode]));
}

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

  return <ChakraProvider value={systemFor(mode)}>{children}</ChakraProvider>;
}
`,
};
