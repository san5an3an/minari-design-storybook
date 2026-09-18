import * as m000 from "./configurator";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "icon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
