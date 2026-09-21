import * as m000 from "../_src/demos/core/Drawer/Drawer.demo.usage";
import * as m001 from "../_src/demos/core/Drawer/Drawer.demo.positions";
import * as m002 from "../_src/demos/core/Drawer/Drawer.demo.offset";
import * as m003 from "../_src/demos/core/Drawer/Drawer.demo.overlay";
import * as m004 from "../_src/demos/core/Drawer/Drawer.demo.sizes";
import * as m005 from "../_src/demos/core/Drawer/Drawer.demo.header";
import * as m006 from "../_src/demos/core/Drawer/Drawer.demo.overflow";
import * as m007 from "../_src/demos/core/Drawer/Drawer.demo.scrollarea";
import * as m008 from "../_src/demos/core/Drawer/Drawer.demo.transitions";
import * as m009 from "../_src/demos/core/Drawer/Drawer.demo.transitionEnd";
import * as m010 from "../_src/demos/core/Drawer/Drawer.demo.initialFocus";
import * as m011 from "../_src/demos/core/Drawer/Drawer.demo.initialFocusTrap";
import * as m012 from "../_src/demos/core/Drawer/Drawer.demo.closeIcon";
import * as m013 from "../_src/demos/core/Drawer/Drawer.demo.composition";
import * as m014 from "../_src/demos/core/Drawer/Drawer.demo.stack";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "positions": m001.positions,
  "offset": m002.offset,
  "overlay": m003.overlay,
  "sizes": m004.sizes,
  "header": m005.header,
  "overflow": m006.overflow,
  "scrollarea": m007.scrollarea,
  "transitions": m008.transitions,
  "transitionEnd": m009.transitionEnd,
  "initialFocus": m010.initialFocus,
  "initialFocusTrap": m011.initialFocusTrap,
  "closeIcon": m012.closeIcon,
  "composition": m013.composition,
  "stack": m014.stack,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
