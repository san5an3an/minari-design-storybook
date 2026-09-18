import * as m000 from "./withinInput";

export const DEMOS: Record<string, { component: unknown }> = {
  "withinInput": m000.withinInput,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_demo.module.css"},
  "stylesApi": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_demo.module.css"},
};
