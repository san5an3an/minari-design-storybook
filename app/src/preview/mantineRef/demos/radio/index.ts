import * as m000 from "../_src/demos/core/Radio/Radio.demo.configurator";
import * as m001 from "../_src/demos/core/Radio/Radio.demo.states";
import * as m002 from "../_src/demos/core/Radio/Radio.demo.icon";
import * as m003 from "../_src/demos/core/Radio/Radio.demo.iconColor";
import * as m004 from "../_src/demos/core/Radio/Radio.demo.disabled";
import * as m005 from "../_src/demos/core/Radio/Radio.demo.tooltip";
import * as m006 from "../_src/demos/core/Radio/Radio.demo.groupConfigurator";
import * as m007 from "../_src/demos/core/Radio/Radio.demo.indicator";
import * as m008 from "../_src/demos/core/Radio/Radio.demo.card";
import * as m009 from "../_src/demos/core/Radio/Radio.demo.cardGroup";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "icon": m002.icon,
  "iconColor": m003.iconColor,
  "disabled": m004.disabled,
  "tooltip": m005.tooltip,
  "groupConfigurator": m006.groupConfigurator,
  "indicator": m007.indicator,
  "card": m008.card,
  "cardGroup": m009.cardGroup,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
