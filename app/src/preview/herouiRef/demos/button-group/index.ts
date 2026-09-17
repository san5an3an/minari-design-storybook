import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./orientation";
import * as m004 from "./with-icons";
import * as m005 from "./full-width";
import * as m006 from "./disabled";
import * as m007 from "./without-separator";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "sizes": m002.Sizes,
  "orientation": m003.Orientation,
  "with-icons": m004.WithIcons,
  "full-width": m005.FullWidth,
  "disabled": m006.Disabled,
  "without-separator": m007.WithoutSeparator,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
