import * as m000 from "./avatar.root";
import * as m001 from "./avatar.withBorder";
import * as m002 from "./avatar.placeholder";
import * as m003 from "./avatar.placeholderInitials";
import * as m004 from "./avatar.dotIndicator";
import * as m005 from "./avatar.stackedLayout";
import * as m006 from "./avatar.withText";
import * as m007 from "./avatar.dropdown";
import * as m008 from "./avatar.colors";
import * as m009 from "./avatar.sizes";
import * as m010 from "./avatar.overrideImage";

export const DEMOS: Record<string, { component: unknown }> = {
  "avatar.root": m000.root,
  "avatar.withBorder": m001.withBorder,
  "avatar.placeholder": m002.placeholder,
  "avatar.placeholderInitials": m003.placeholderInitials,
  "avatar.dotIndicator": m004.dotIndicator,
  "avatar.stackedLayout": m005.stackedLayout,
  "avatar.withText": m006.withText,
  "avatar.dropdown": m007.dropdown,
  "avatar.colors": m008.colors,
  "avatar.sizes": m009.sizes,
  "avatar.overrideImage": m010.overrideImage,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
