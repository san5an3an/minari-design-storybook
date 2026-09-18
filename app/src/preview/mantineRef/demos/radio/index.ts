import * as m000 from "./configurator";
import * as m001 from "./states";
import * as m002 from "./icon";
import * as m003 from "./iconColor";
import * as m004 from "./disabled";
import * as m005 from "./tooltip";
import * as m006 from "./groupConfigurator";
import * as m007 from "./indicator";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "icon": m002.icon,
  "iconColor": m003.iconColor,
  "disabled": m004.disabled,
  "tooltip": m005.tooltip,
  "groupConfigurator": m006.groupConfigurator,
  "indicator": m007.indicator,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "card": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Radio.demo.card.module.css"},
  "cardGroup": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Radio.demo.card.module.css"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
