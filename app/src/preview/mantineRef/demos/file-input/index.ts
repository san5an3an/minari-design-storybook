import * as m000 from "./multiple";
import * as m001 from "./accept";
import * as m002 from "./clearable";
import * as m003 from "./valueComponent";
import * as m004 from "./error";
import * as m005 from "./disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "multiple": m000.multiple,
  "accept": m001.accept,
  "clearable": m002.clearable,
  "valueComponent": m003.valueComponent,
  "error": m004.error,
  "disabled": m005.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
