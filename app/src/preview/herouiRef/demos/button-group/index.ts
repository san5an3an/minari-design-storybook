import * as m000 from "./variants";
import * as m001 from "./sizes";
import * as m002 from "./disabled";
import * as m003 from "./without-separator";

export const DEMOS = {
  "variants": m000.Variants,
  "sizes": m001.Sizes,
  "disabled": m002.Disabled,
  "without-separator": m003.WithoutSeparator,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "basic": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "orientation": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-icons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "full-width": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-styles": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
