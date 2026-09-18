import * as m000 from "./controlledVisibility";
import * as m001 from "./error";
import * as m002 from "./disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "controlledVisibility": m000.controlledVisibility,
  "error": m001.error,
  "disabled": m002.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "visibilityIcon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "strengthMeter": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
