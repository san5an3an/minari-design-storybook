import * as m000 from "./usage";
import * as m001 from "./truncate";
import * as m002 from "./linesConfigurator";
import * as m003 from "./lineClamp";
import * as m004 from "./inherit";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "truncate": m001.truncate,
  "linesConfigurator": m002.linesConfigurator,
  "lineClamp": m003.lineClamp,
  "inherit": m004.inherit,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "gradient": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
};
