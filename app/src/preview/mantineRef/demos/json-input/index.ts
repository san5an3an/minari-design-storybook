import * as m000 from "./usage";
import * as m001 from "./disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "disabled": m001.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
