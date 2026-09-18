import * as m000 from "./configurator";
import * as m001 from "./size";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "size": m001.size,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "cssLoader": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_CssLoader"},
  "customType": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_RingLoader"},
  "customLoader": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
};
