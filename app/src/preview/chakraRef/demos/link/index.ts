import * as m000 from "./link-basic";
import * as m001 from "./link-with-variants";
import * as m002 from "./link-within-text";
import * as m003 from "./link-with-external";

export const DEMOS = {
  "link-basic": m000.LinkBasic,
  "link-with-variants": m001.LinkWithVariants,
  "link-within-text": m002.LinkWithinText,
  "link-with-external": m003.LinkWithExternal,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
