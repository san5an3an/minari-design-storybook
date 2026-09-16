import * as m000 from "./default";
import * as m001 from "./statuses";
import * as m002 from "./placements";
import * as m003 from "./controlled";
import * as m004 from "./backdrop-variants";
import * as m005 from "./close-methods";
import * as m006 from "./custom-portal";
import * as m007 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "statuses": m001.Statuses,
  "placements": m002.Placements,
  "controlled": m003.Controlled,
  "backdrop-variants": m004.BackdropVariants,
  "close-methods": m005.CloseMethods,
  "custom-portal": m006.CustomPortal,
  "custom-styles": m007.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "sizes": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-trigger": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-backdrop": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "dismiss-behavior": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-animations": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
