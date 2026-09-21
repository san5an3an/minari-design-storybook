import * as React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import type { CSSProperties } from "react";
import type { BaseRefProviderProps } from "../refContract";

type SpectrumStyle = CSSProperties & Record<`--${string}`, string>;

const colorRoles = {
  accent: "brand",
  negative: "danger",
  positive: "success",
  notice: "warning",
  informative: "info",
  neutral: "neutral",
} as const;

function spectrumTokenStyle: SpectrumStyle {
  const style: SpectrumStyle = {
    "--spectrum-global-font-family-base": "var(--base-font-family-sans)",
    "--spectrum-global-font-family-code": "var(--base-font-family-mono)",
    "--spectrum-global-font-weight-regular": "var(--base-font-weight-regular)",
    "--spectrum-global-font-weight-medium": "var(--base-font-weight-medium)",
    "--spectrum-global-font-weight-semi-bold": "var(--base-font-weight-semibold)",
    "--spectrum-global-font-weight-bold": "var(--base-font-weight-bold)",
    "--spectrum-global-font-line-height-small": "var(--semantic-line-height-snug)",
    "--spectrum-global-font-line-height-medium": "var(--semantic-line-height-normal)",
    "--spectrum-global-font-line-height-large": "var(--semantic-line-height-relaxed)",
    "--spectrum-global-dimension-font-size-75": "var(--semantic-text-caption)",
    "--spectrum-global-dimension-font-size-100": "var(--semantic-text-body-sm)",
    "--spectrum-global-dimension-font-size-200": "var(--semantic-text-body)",
    "--spectrum-global-dimension-font-size-300": "var(--semantic-text-body-lg)",
    "--spectrum-global-dimension-font-size-400": "var(--semantic-text-heading-sm)",
    "--spectrum-global-dimension-font-size-500": "var(--semantic-text-heading)",
    "--spectrum-global-dimension-font-size-700": "var(--semantic-text-heading-lg)",
    "--spectrum-global-dimension-font-size-900": "var(--semantic-text-display)",
    "--spectrum-background-base-color": "var(--semantic-bg-neutral-subtlest)",
    "--spectrum-background-layer-1-color": "var(--semantic-bg-neutral-surface)",
    "--spectrum-background-layer-2-color": "var(--semantic-bg-neutral-subtle)",
    "--spectrum-background-elevated-color": "var(--semantic-bg-neutral-surface)",
    "--spectrum-background-pasteboard-color": "var(--semantic-bg-neutral-subtle)",
    "--spectrum-body-color": "var(--semantic-fg-neutral-default)",
    "--spectrum-heading-color": "var(--semantic-fg-neutral-default)",
    "--spectrum-detail-color": "var(--semantic-fg-neutral-subtle)",
    "--spectrum-code-color": "var(--semantic-fg-neutral-default)",
    "--spectrum-disabled-content-color": "var(--semantic-fg-neutral-subtlest)",
    "--spectrum-disabled-background-color": "var(--semantic-bg-neutral-subtle)",
    "--spectrum-disabled-border-color": "var(--semantic-border-neutral-subtle)",
  };

  for (const [spectrum, semantic] of Object.entries(colorRoles)) {
    style[`--spectrum-${spectrum}-background-color-default`] = `var(--semantic-bg-${semantic}-default)`;
    style[`--spectrum-${spectrum}-background-color-hover`] = `var(--semantic-bg-${semantic}-strong)`;
    style[`--spectrum-${spectrum}-background-color-down`] = `var(--base-color-${semantic}-11)`;
    style[`--spectrum-${spectrum}-background-color-key-focus`] = `var(--semantic-bg-${semantic}-strong)`;
    style[`--spectrum-${spectrum}-subtle-background-color-default`] = `var(--semantic-bg-${semantic}-subtle)`;
    style[`--spectrum-${spectrum}-visual-color`] = `var(--semantic-bg-${semantic}-default)`;
  }

  style["--spectrum-accent-content-color-default"] = "var(--semantic-fg-brand-default)";
  style["--spectrum-accent-content-color-hover"] = "var(--semantic-fg-brand-strong)";
  style["--spectrum-accent-content-color-down"] = "var(--semantic-fg-brand-strong)";
  style["--spectrum-accent-content-color-key-focus"] = "var(--semantic-fg-brand-default)";
  style["--spectrum-accent-content-color-selected"] = "var(--semantic-fg-brand-strong)";

  for (const semantic of ["danger", "neutral"] as const) {
    const spectrum = semantic === "danger" ? "negative" : "neutral";
    style[`--spectrum-${spectrum}-content-color-default`] = `var(--semantic-fg-${semantic}-default)`;
    style[`--spectrum-${spectrum}-content-color-hover`] = `var(--semantic-fg-${semantic}-strong)`;
    style[`--spectrum-${spectrum}-content-color-down`] = `var(--semantic-fg-${semantic}-strong)`;
    style[`--spectrum-${spectrum}-content-color-key-focus`] = `var(--semantic-fg-${semantic}-default)`;
    style[`--spectrum-${spectrum}-subdued-background-color-default`] = `var(--semantic-bg-${semantic}-subtle)`;
    style[`--spectrum-${spectrum}-subdued-background-color-hover`] = `var(--semantic-bg-${semantic}-subtlest)`;
    style[`--spectrum-${spectrum}-subdued-background-color-down`] = `var(--semantic-bg-${semantic}-subtlest)`;
    style[`--spectrum-${spectrum}-subdued-background-color-key-focus`] = `var(--semantic-bg-${semantic}-subtle)`;
  }

  for (const state of ["default", "hover", "down", "key-focus"] as const) {
    style[`--spectrum-negative-border-color-${state}`] = `var(--semantic-border-danger-${state === "default" ? "default" : "strong"})`;
  }
  style["--spectrum-negative-border-color-focus"] = "var(--semantic-border-focus-default)";
  style["--spectrum-negative-border-color-focus-hover"] = "var(--semantic-border-focus-default)";

  style.fontFamily = "var(--base-font-family-sans)";
  return style;
}

const TOKEN_STYLE = spectrumTokenStyle;

const FONT_CSS = `
[class*="i18nFontFamily"],
[class*="i18nFontFamily"] *:not(code):not(pre):not(kbd):not(samp):not(code *):not(pre *) {
  font-family: var(--base-font-family-sans);
}
[class*="i18nFontFamily"] code,
[class*="i18nFontFamily"] pre,
[class*="i18nFontFamily"] kbd,
[class*="i18nFontFamily"] samp { font-family: var(--base-font-family-mono); }
`;

function useSpectrumFont: void {
  React.useEffect( => {
    const id = "spectrum-ref-font";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = FONT_CSS;
    document.head.appendChild(el);
    return  => { el.remove; };
  }, []);
}

export default function SpectrumRefProvider({ mode, children }: BaseRefProviderProps) {
  useSpectrumFont;
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
