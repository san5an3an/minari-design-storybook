import * as m000 from "./usage";
import * as m001 from "./searchableMultiselect";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "searchableMultiselect": m001.searchableMultiselect,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
};
