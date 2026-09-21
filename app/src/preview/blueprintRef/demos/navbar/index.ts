import * as m000 from "./NavbarExample";

export const DEMOS = {
  "NavbarExample": m000.NavbarExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "NavbarFixedWidthExample": {"code": "other", "codes": ["other"], "detail": "별도 파일이 아니라 `navbarExample.tsx` 안 인라인 JSX 라서 원문을 자르지 않고 싣지 않았어요."},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
