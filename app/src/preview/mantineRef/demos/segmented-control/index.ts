import * as m000 from "./usage";
import * as m001 from "./disabled";
import * as m002 from "./configurator";
import * as m003 from "./transitions";
import * as m004 from "./readOnly";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "disabled": m001.disabled,
  "configurator": m002.configurator,
  "transitions": m003.transitions,
  "readOnly": m004.readOnly,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "labels": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
  "iconsOnly": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
