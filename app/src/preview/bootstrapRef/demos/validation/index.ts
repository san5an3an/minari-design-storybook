import m000 from "./ValidationNative";
import m001 from "./ValidationFormik";
import m002 from "./ValidationTooltips";
import m003 from "./ValidationInputGroup";

export const DEMOS: Record<string, unknown> = {
  "ValidationNative": m000,
  "ValidationFormik": m001,
  "ValidationTooltips": m002,
  "ValidationInputGroup": m003,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
