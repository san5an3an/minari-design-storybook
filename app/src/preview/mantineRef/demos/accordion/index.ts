import * as m000 from "../_src/demos/core/Accordion/Accordion.demo.configurator";
import * as m001 from "../_src/demos/core/Accordion/Accordion.demo.label";
import * as m002 from "../_src/demos/core/Accordion/Accordion.demo.chevron";
import * as m003 from "../_src/demos/core/Accordion/Accordion.demo.icons";
import * as m004 from "../_src/demos/core/Accordion/Accordion.demo.transitions";
import * as m005 from "../_src/demos/core/Accordion/Accordion.demo.transitions";
import * as m006 from "../_src/demos/core/Accordion/Accordion.demo.sideControls";
import * as m007 from "../_src/demos/core/Accordion/Accordion.demo.disabled";
import * as m008 from "../_src/demos/core/Accordion/Accordion.demo.unstyled";
import * as m009 from "../_src/demos/core/Accordion/Accordion.demo.customize";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "label": m001.label,
  "chevron": m002.chevron,
  "icons": m003.icons,
  "customTransitions": m004.customTransitions,
  "disableTransitions": m005.disableTransitions,
  "sideControls": m006.sideControls,
  "disabled": m007.disabled,
  "unstyled": m008.unstyled,
  "customize": m009.customize,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
