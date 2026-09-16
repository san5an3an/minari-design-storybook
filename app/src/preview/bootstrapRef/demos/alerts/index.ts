import m000 from "./Basic";
import m001 from "./Link";
import m002 from "./AdditionalContent";
import m003 from "./Dismissible";
import m004 from "./DismissibleControlled";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Link": m001,
  "AdditionalContent": m002,
  "Dismissible": m003,
  "DismissibleControlled": m004,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
