import * as m000 from "../_src/demos/core/Menu/Menu.demo.usage";
import * as m001 from "../_src/demos/core/Menu/Menu.demo.hover";
import * as m002 from "../_src/demos/core/Menu/Menu.demo.clickHover";
import * as m003 from "../_src/demos/core/Menu/Menu.demo.disabled";
import * as m004 from "../_src/demos/core/Menu/Menu.demo.positionConfigurator";
import * as m005 from "../_src/demos/core/Menu/Menu.demo.transitions";
import * as m006 from "../_src/demos/core/Menu/Menu.demo.component";
import * as m007 from "../_src/demos/core/Menu/Menu.demo.customControl";
import * as m008 from "../_src/demos/core/Menu/Menu.demo.navigation";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "hover": m001.hover,
  "clickHover": m002.clickHover,
  "disabled": m003.disabled,
  "positionConfigurator": m004.positionConfigurator,
  "transitions": m005.transitions,
  "component": m006.component,
  "customControl": m007.customControl,
  "navigation": m008.navigation,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
