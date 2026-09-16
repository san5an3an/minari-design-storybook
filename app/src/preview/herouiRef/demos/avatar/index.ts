import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./colors";
import * as m003 from "./group";
import * as m004 from "./custom-image-component";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "colors": m002.Colors,
  "group": m003.Group,
  "custom-image-component": m004.CustomImageComponent,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "variants": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "fallback": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
