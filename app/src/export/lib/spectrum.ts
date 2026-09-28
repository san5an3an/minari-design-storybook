import type { LibSpec } from "./registry";

function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

export const SPECTRUM: LibSpec = {
  title: "Spectrum",
  packages: ["@adobe/react-spectrum"],
  themeDir: "spectrum",
  themeExt: "css",
  importFrom: "@adobe/react-spectrum",
  refDir: "spectrumRef",
  parse: (json) => {
    const d = json as { slug?: string; title?: string };
    const componentName = (d.title ?? "").trim || pascal(d.slug ?? "");
    return { componentName, props: [], dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

import * as React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import type { CSSProperties } from "react";

import "./theme.css";

export type Mode = "light" | "dark" | "high-contrast";

type SpectrumStyle = CSSProperties & Record<\`--\${string}\`, string>;

// theme.css 미선언 값만
const TOKEN_STYLE: SpectrumStyle = {
  "--spectrum-global-font-weight-regular": "var(--base-font-weight-regular)",
  "--spectrum-global-font-weight-medium": "var(--base-font-weight-medium)",
  "--spectrum-global-font-weight-semi-bold": "var(--base-font-weight-semibold)",
  "--spectrum-global-font-weight-bold": "var(--base-font-weight-bold)",
  "--spectrum-global-dimension-font-size-75": "var(--semantic-text-caption)",
  "--spectrum-global-dimension-font-size-100": "var(--semantic-text-body-sm)",
  "--spectrum-global-dimension-font-size-200": "var(--semantic-text-body)",
  "--spectrum-global-dimension-font-size-300": "var(--semantic-text-body-lg)",
  "--spectrum-global-dimension-font-size-400": "var(--semantic-text-heading-sm)",
  "--spectrum-global-dimension-font-size-500": "var(--semantic-text-heading)",
  "--spectrum-global-dimension-font-size-700": "var(--semantic-text-heading-lg)",
  "--spectrum-global-dimension-font-size-900": "var(--semantic-text-display)",
  "--spectrum-notice-background-color-hover": "var(--semantic-bg-warning-strong)",
  "--spectrum-notice-background-color-down": "var(--base-color-warning-11)",
  "--spectrum-notice-background-color-key-focus": "var(--semantic-bg-warning-strong)",
  "--spectrum-informative-background-color-default": "var(--semantic-bg-info-default)",
  "--spectrum-informative-background-color-hover": "var(--semantic-bg-info-strong)",
  "--spectrum-informative-background-color-down": "var(--base-color-info-11)",
  "--spectrum-informative-background-color-key-focus": "var(--semantic-bg-info-strong)",
  "--spectrum-informative-subtle-background-color-default": "var(--semantic-bg-info-subtle)",
  "--spectrum-informative-visual-color": "var(--semantic-bg-info-default)",
  fontFamily: "var(--base-font-family-sans)",
};

const FONT_CSS = \`
[class*="i18nFontFamily"],
[class*="i18nFontFamily"] *:not(code):not(pre):not(kbd):not(samp):not(code *):not(pre *) {
  font-family: var(--base-font-family-sans);
}
[class*="i18nFontFamily"] code,
[class*="i18nFontFamily"] pre,
[class*="i18nFontFamily"] kbd,
[class*="i18nFontFamily"] samp { font-family: var(--base-font-family-mono); }
\`;

function useSpectrumFont: void {
  React.useEffect( => {
    const id = "spectrum-export-font";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = FONT_CSS;
    document.head.appendChild(el);
    return  => { el.remove; };
  }, []);
}

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  useSpectrumFont;

  // data-theme 명시적으로 지정. 안 하면 OS 설정값이 색에 적용될 수 있음
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <Provider
      theme={defaultTheme}
      colorScheme={mode === "light" ? "light" : "dark"}
      scale="medium"
      UNSAFE_style={TOKEN_STYLE}
    >
      {children}
    </Provider>
  );
}
`,
};
