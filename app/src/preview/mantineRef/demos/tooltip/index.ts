import * as m000 from "./usage";
import * as m001 from "./configurator";
import * as m002 from "./arrow";
import * as m003 from "./controlled";
import * as m004 from "./multiline";
import * as m005 from "./inline";
import * as m006 from "./transitions";
import * as m007 from "./delay";
import * as m008 from "./group";
import * as m009 from "./floating";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "arrow": m002.arrow,
  "controlled": m003.controlled,
  "multiline": m004.multiline,
  "inline": m005.inline,
  "transitions": m006.transitions,
  "delay": m007.delay,
  "group": m008.group,
  "floating": m009.floating,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "offset": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "offsetAxis": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
};
