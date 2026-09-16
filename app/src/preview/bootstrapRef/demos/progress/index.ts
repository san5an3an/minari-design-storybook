import m000 from "./Basic";
import m001 from "./WithLabel";
import m002 from "./ScreenreaderLabel";
import m003 from "./Contextual";
import m004 from "./Striped";
import m005 from "./Animated";
import m006 from "./Stacked";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "WithLabel": m001,
  "ScreenreaderLabel": m002,
  "Contextual": m003,
  "Striped": m004,
  "Animated": m005,
  "Stacked": m006,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
