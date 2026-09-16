import * as m000 from "./basic";
import * as m001 from "./text-content";
import * as m002 from "./user-profile";
import * as m003 from "./list";
import * as m004 from "./grid";
import * as m005 from "./single-shimmer";
import * as m006 from "./animation-types";
import * as m007 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "text-content": m001.TextContent,
  "user-profile": m002.UserProfile,
  "list": m003.List,
  "grid": m004.Grid,
  "single-shimmer": m005.SingleShimmer,
  "animation-types": m006.AnimationTypes,
  "custom-styles": m007.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
