import * as m000 from "./autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "autoContrast": m000.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "active": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "nested": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
