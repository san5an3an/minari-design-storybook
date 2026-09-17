import * as m000 from "./ButtonGroupBasicExample";
import * as m001 from "./ButtonGroupIntentExample";
import * as m002 from "./ButtonGroupVariantExample";
import * as m003 from "./ButtonGroupOutlinedMinimalExample";
import * as m004 from "./ButtonGroupSizeExample";
import * as m005 from "./ButtonGroupFillExample";
import * as m006 from "./ButtonGroupIconsOnlyExample";
import * as m007 from "./ButtonGroupIconsWithTooltipsExample";
import * as m008 from "./ButtonGroupFlexExample";
import * as m009 from "./ButtonGroupVerticalExample";
import * as m010 from "./ButtonGroupPopoverExample";
import * as m011 from "./ButtonGroupPlaygroundExample";

export const DEMOS = {
  "ButtonGroupBasicExample": m000.default,
  "ButtonGroupIntentExample": m001.default,
  "ButtonGroupVariantExample": m002.default,
  "ButtonGroupOutlinedMinimalExample": m003.default,
  "ButtonGroupSizeExample": m004.default,
  "ButtonGroupFillExample": m005.default,
  "ButtonGroupIconsOnlyExample": m006.default,
  "ButtonGroupIconsWithTooltipsExample": m007.default,
  "ButtonGroupFlexExample": m008.default,
  "ButtonGroupVerticalExample": m009.default,
  "ButtonGroupPopoverExample": m010.ButtonGroupPopoverExample,
  "ButtonGroupPlaygroundExample": m011.ButtonGroupPlaygroundExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
