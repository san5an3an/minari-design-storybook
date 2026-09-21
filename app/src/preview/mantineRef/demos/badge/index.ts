import * as m000 from "../_src/demos/core/Badge/Badge.demo.usage";
import * as m001 from "../_src/demos/core/Badge/Badge.demo.gradient";
import * as m002 from "../_src/demos/core/Badge/Badge.demo.rounded";
import * as m003 from "../_src/demos/core/Badge/Badge.demo.sections";
import * as m004 from "../_src/demos/core/Badge/Badge.demo.fullWidth";
import * as m005 from "../_src/demos/core/Badge/Badge.demo.variantColorsResolver";
import * as m006 from "../_src/demos/core/Badge/Badge.demo.autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "rounded": m002.rounded,
  "sections": m003.sections,
  "fullWidth": m004.fullWidth,
  "variantColorsResolver": m005.variantColorsResolver,
  "autoContrast": m006.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
