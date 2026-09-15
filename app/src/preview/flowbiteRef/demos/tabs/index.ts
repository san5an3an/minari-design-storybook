import * as m000 from "./tabs.withPills";

export const DEMOS: Record<string, { component: unknown }> = {
  "tabs.withPills": m000.withPills,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "tabs.root": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "tabs.withUnderline": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "tabs.withIcons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "tabs.fullWidth": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "tabs.stateOptions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
