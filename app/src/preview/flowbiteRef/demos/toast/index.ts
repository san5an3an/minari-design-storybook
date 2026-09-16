import * as m000 from "./toast.withButton";

export const DEMOS: Record<string, { component: unknown }> = {
  "toast.withButton": m000.withButton,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "toast.root": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "toast.colors": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "toast.feedback": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "toast.interactive": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "toast.customDismissal": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
