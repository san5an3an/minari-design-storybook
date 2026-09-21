import * as m000 from "./default";
import * as m001 from "./variants";
import * as m002 from "./placements";
import * as m003 from "./simple";
import * as m004 from "./custom-indicator";
import * as m005 from "./custom-toast";
import * as m006 from "./promise";
import * as m007 from "./callbacks";
import * as m008 from "./custom-queue";
import * as m009 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "variants": m001.Variants,
  "placements": m002.Placements,
  "simple": m003.Simple,
  "custom-indicator": m004.CustomIndicator,
  "custom-toast": m005.CustomToast,
  "promise": m006.PromiseDemo,
  "callbacks": m007.Callbacks,
  "custom-queue": m008.CustomQueue,
  "custom-styles": m009.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
