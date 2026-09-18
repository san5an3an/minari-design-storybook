import * as m000 from "./data";
import * as m001 from "./options";
import * as m002 from "./dividers";
import * as m003 from "./disabled";
import * as m004 from "./error";

export const DEMOS: Record<string, { component: unknown }> = {
  "data": m000.data,
  "options": m001.options,
  "dividers": m002.dividers,
  "disabled": m003.disabled,
  "error": m004.error,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
