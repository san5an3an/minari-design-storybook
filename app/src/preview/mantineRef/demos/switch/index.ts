import * as m000 from "../_src/demos/core/Switch/Switch.demo.configurator";
import * as m001 from "../_src/demos/core/Switch/Switch.demo.labels";
import * as m002 from "../_src/demos/core/Switch/Switch.demo.iconLabels";
import * as m003 from "../_src/demos/core/Switch/Switch.demo.thumbIcon";
import * as m004 from "../_src/demos/core/Switch/Switch.demo.tooltip";
import * as m005 from "../_src/demos/core/Switch/Switch.demo.groupConfigurator";
import * as m006 from "../_src/demos/core/Switch/Switch.demo.styles";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "labels": m001.labels,
  "iconLabels": m002.iconLabels,
  "thumbIcon": m003.thumbIcon,
  "tooltip": m004.tooltip,
  "groupConfigurator": m005.groupConfigurator,
  "styles": m006.styles,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
