import m000 from "./Uncontrolled";
import m001 from "./Controlled";
import m002 from "./NoAnimation";
import m003 from "./Fill";
import m004 from "./Justified";
import m005 from "./LeftTabs";

export const DEMOS: Record<string, unknown> = {
  "Uncontrolled": m000,
  "Controlled": m001,
  "NoAnimation": m002,
  "Fill": m003,
  "Justified": m004,
  "LeftTabs": m005,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
