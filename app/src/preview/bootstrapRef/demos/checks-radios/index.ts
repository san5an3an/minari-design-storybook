import m000 from "./Check";
import m001 from "./Switch";
import m002 from "./CheckInline";
import m003 from "./CheckReverse";
import m004 from "./NoLabels";
import m005 from "./CheckApi";

export const DEMOS: Record<string, unknown> = {
  "Check": m000,
  "Switch": m001,
  "CheckInline": m002,
  "CheckReverse": m003,
  "NoLabels": m004,
  "CheckApi": m005,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
