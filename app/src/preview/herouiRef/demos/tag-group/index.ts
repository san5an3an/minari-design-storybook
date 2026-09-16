import * as m000 from "./sizes";
import * as m001 from "./variants";
import * as m002 from "./disabled";
import * as m003 from "./selection-modes";
import * as m004 from "./controlled";
import * as m005 from "./with-error-message";
import * as m006 from "./with-list-data";

export const DEMOS = {
  "sizes": m000.TagGroupSizes,
  "variants": m001.TagGroupVariants,
  "disabled": m002.TagGroupDisabled,
  "selection-modes": m003.TagGroupSelectionModes,
  "controlled": m004.TagGroupControlled,
  "with-error-message": m005.TagGroupWithErrorMessage,
  "with-list-data": m006.TagGroupWithListData,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "basic": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-prefix": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-remove-button": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "render-function": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-styles": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
