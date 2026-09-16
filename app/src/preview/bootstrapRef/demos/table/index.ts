import m000 from "./Basic";
import m001 from "./Small";
import m002 from "./Dark";
import m003 from "./StripedRow";
import m004 from "./StripedColumns";
import m005 from "./Responsive";
import m006 from "./ResponsiveBreakpoints";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Small": m001,
  "Dark": m002,
  "StripedRow": m003,
  "StripedColumns": m004,
  "Responsive": m005,
  "ResponsiveBreakpoints": m006,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
