import * as m000 from "./usage";
import * as m001 from "./fluid";
import * as m002 from "./sizes";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "fluid": m001.fluid,
  "sizes": m002.sizes,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "responsive": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Container.demo.responsive.module.css"},
};
