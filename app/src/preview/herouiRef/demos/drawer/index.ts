import * as m000 from "./basic";
import * as m001 from "./placements";
import * as m002 from "./non-dismissable";
import * as m003 from "./scrollable-content";
import * as m004 from "./controlled";
import * as m005 from "./with-form";
import * as m006 from "./backdrop-variants";
import * as m007 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "placements": m001.Placements,
  "non-dismissable": m002.NonDismissable,
  "scrollable-content": m003.ScrollableContent,
  "controlled": m004.Controlled,
  "with-form": m005.WithForm,
  "backdrop-variants": m006.BackdropVariants,
  "custom-styles": m007.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "navigation": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
