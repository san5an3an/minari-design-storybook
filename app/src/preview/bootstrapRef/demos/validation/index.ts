import m000 from "./ValidationNative";
import m001 from "./ValidationInputGroup";

export const DEMOS: Record<string, unknown> = {
  "ValidationNative": m000,
  "ValidationInputGroup": m001,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "ValidationFormik": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: formik, yup"},
  "ValidationTooltips": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: formik, yup"},
};
