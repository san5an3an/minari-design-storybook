import * as m000 from "../_src/demos/core/Checkbox/Checkbox.demo.configurator";
import * as m001 from "../_src/demos/core/Checkbox/Checkbox.demo.states";
import * as m002 from "../_src/demos/core/Checkbox/Checkbox.demo.icon";
import * as m003 from "../_src/demos/core/Checkbox/Checkbox.demo.iconColor";
import * as m004 from "../_src/demos/core/Checkbox/Checkbox.demo.indeterminate";
import * as m005 from "../_src/demos/core/Checkbox/Checkbox.demo.anchor";
import * as m006 from "../_src/demos/core/Checkbox/Checkbox.demo.tooltip";
import * as m007 from "../_src/demos/theming/Theming.demo.cursorType";
import * as m008 from "../_src/demos/core/Checkbox/Checkbox.demo.customSize";
import * as m009 from "../_src/demos/core/Checkbox/Checkbox.demo.groupConfigurator";
import * as m010 from "../_src/demos/core/Checkbox/Checkbox.demo.indicator";
import * as m011 from "../_src/demos/core/Checkbox/Checkbox.demo.card";
import * as m012 from "../_src/demos/core/Checkbox/Checkbox.demo.cardGroup";
import * as m013 from "../_src/demos/core/Table/Table.demo.rowSelection";
import * as m014 from "../_src/demos/core/Checkbox/Checkbox.demo.customize";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "icon": m002.icon,
  "iconColor": m003.iconColor,
  "indeterminate": m004.indeterminate,
  "anchor": m005.anchor,
  "tooltip": m006.tooltip,
  "cursorType": m007.cursorType,
  "customSize": m008.customSize,
  "groupConfigurator": m009.groupConfigurator,
  "indicator": m010.indicator,
  "card": m011.card,
  "cardGroup": m012.cardGroup,
  "rowSelection": m013.rowSelection,
  "customize": m014.customize,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
