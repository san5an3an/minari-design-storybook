import m000 from "./Basic";
import m001 from "./Disabled";
import m002 from "./Variants";
import m003 from "./Labelled";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Disabled": m001,
  "Variants": m002,
  "Labelled": m003,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
