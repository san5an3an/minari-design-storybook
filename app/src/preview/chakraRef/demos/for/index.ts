import * as m000 from "./for-basic";
import * as m001 from "./for-with-object";
import * as m002 from "./for-with-fallback";

export const DEMOS = {
  "for-basic": m000.ForBasic,
  "for-with-object": m001.ForWithObject,
  "for-with-fallback": m002.ForWithFallback,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
