/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./password-input-basic";
import * as m001 from "./password-input-with-sizes";
import * as m002 from "./password-input-controlled";
import * as m004 from "./password-input-controlled-visibility";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "password-input-basic": m000.PasswordInputBasic,
  "password-input-with-sizes": m001.PasswordInputWithSizes,
  "password-input-controlled": m002.PasswordInputControlled,
  "password-input-controlled-visibility": m004.PasswordInputControlledVisibility,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "password-input-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-hook-form"},
  "password-input-with-strength-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: check-password-strength"},
};
