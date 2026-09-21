import * as m000 from "./badge-basic";
import * as m001 from "./badge-with-icon";
import * as m002 from "./badge-with-variants";
import * as m003 from "./badge-with-sizes";

export const DEMOS = {
  "badge-basic": m000.BadgeBasic,
  "badge-with-icon": m001.BadgeWithIcon,
  "badge-with-variants": m002.BadgeWithVariants,
  "badge-with-sizes": m003.BadgeWithSizes,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
