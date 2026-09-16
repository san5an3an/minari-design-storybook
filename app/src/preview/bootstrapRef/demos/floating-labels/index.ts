import m000 from "./FormFloatingBasic";
import m001 from "./FormFloatingTextarea";
import m002 from "./FormFloatingSelect";
import m003 from "./FormFloatingLayout";
import m004 from "./FormFloatingCustom";

export const DEMOS: Record<string, unknown> = {
  "FormFloatingBasic": m000,
  "FormFloatingTextarea": m001,
  "FormFloatingSelect": m002,
  "FormFloatingLayout": m003,
  "FormFloatingCustom": m004,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
