import * as m000 from "./configurator";
import * as m001 from "./states";
import * as m002 from "./iconColor";
import * as m003 from "./indeterminate";
import * as m004 from "./anchor";
import * as m005 from "./tooltip";
import * as m006 from "./cursorType";
import * as m007 from "./groupConfigurator";
import * as m008 from "./indicator";
import * as m009 from "./rowSelection";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "iconColor": m002.iconColor,
  "indeterminate": m003.indeterminate,
  "anchor": m004.anchor,
  "tooltip": m005.tooltip,
  "cursorType": m006.cursorType,
  "groupConfigurator": m007.groupConfigurator,
  "indicator": m008.indicator,
  "rowSelection": m009.rowSelection,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "icon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "customSize": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Checkbox.demo.customSize.module.css"},
  "card": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Checkbox.demo.card.module.css"},
  "cardGroup": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Checkbox.demo.card.module.css"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
  "customize": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Checkbox.demo.customize.module.css"},
};
