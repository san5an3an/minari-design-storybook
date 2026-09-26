import * as m000 from "../_src/demos/core/Tabs/Tabs.demo.usage";
import * as m001 from "../_src/demos/core/Tabs/Tabs.demo.colors";
import * as m002 from "../_src/demos/core/Tabs/Tabs.demo.position";
import * as m003 from "../_src/demos/core/Tabs/Tabs.demo.pull";
import * as m004 from "../_src/demos/core/Tabs/Tabs.demo.inverted";
import * as m005 from "../_src/demos/core/Tabs/Tabs.demo.placement";
import * as m006 from "../_src/demos/core/FloatingIndicator/FloatingIndicator.demo.tabs";
import * as m007 from "../_src/demos/core/Tabs/Tabs.demo.disabled";
import * as m008 from "../_src/demos/core/Tabs/Tabs.demo.keyboardActivation";
import * as m009 from "../_src/demos/core/Tabs/Tabs.demo.deactivate";
import * as m010 from "../_src/demos/core/Tabs/Tabs.demo.stylesApi";
import * as m011 from "../_src/demos/core/Tabs/Tabs.demo.customize";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "colors": m001.colors,
  "position": m002.position,
  "pull": m003.pull,
  "inverted": m004.inverted,
  "placement": m005.placement,
  "tabs": m006.tabs,
  "disabled": m007.disabled,
  "keyboardActivation": m008.keyboardActivation,
  "deactivate": m009.deactivate,
  "stylesApi": m010.stylesApi,
  "customize": m011.customize,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
