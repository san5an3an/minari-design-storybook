import * as m000 from "./tag-basic";
import * as m001 from "./tag-with-icon";
import * as m002 from "./tag-with-variants";
import * as m003 from "./tag-with-sizes";
import * as m004 from "./tag-with-colors";
import * as m005 from "./tag-with-close";
import * as m006 from "./tag-with-overflow";
import * as m007 from "./tag-with-avatar";
import * as m008 from "./tag-as-button";

export const DEMOS = {
  "tag-basic": m000.TagBasic,
  "tag-with-icon": m001.TagWithIcon,
  "tag-with-variants": m002.TagWithVariants,
  "tag-with-sizes": m003.TagWithSizes,
  "tag-with-colors": m004.TagWithColors,
  "tag-with-close": m005.TagWithClose,
  "tag-with-overflow": m006.TagWithOverflow,
  "tag-with-avatar": m007.TagWithAvatar,
  "tag-as-button": m008.TagAsButton,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
