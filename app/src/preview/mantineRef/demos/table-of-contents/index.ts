import * as m000 from "./usage";
import * as m001 from "./depthOffset";
import * as m002 from "./autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "depthOffset": m001.depthOffset,
  "autoContrast": m002.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "styles": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./TableOfContents.demo.styles.module.css"},
};
