import * as m000 from "./configurator";
import * as m001 from "./regexp";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "regexp": m001.regexp,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
