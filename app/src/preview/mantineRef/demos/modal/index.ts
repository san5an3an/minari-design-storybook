import * as m000 from "../_src/demos/core/Modal/Modal.demo.usage";
import * as m001 from "../_src/demos/core/Modal/Modal.demo.centered";
import * as m002 from "../_src/demos/core/Modal/Modal.demo.header";
import * as m003 from "../_src/demos/core/Modal/Modal.demo.sizes";
import * as m004 from "../_src/demos/core/Modal/Modal.demo.sizeAuto";
import * as m005 from "../_src/demos/core/Modal/Modal.demo.fullScreen";
import * as m006 from "../_src/demos/core/Modal/Modal.demo.fullScreenMobile";
import * as m007 from "../_src/demos/core/Modal/Modal.demo.overlay";
import * as m008 from "../_src/demos/core/Modal/Modal.demo.overflow";
import * as m009 from "../_src/demos/core/Modal/Modal.demo.scrollarea";
import * as m010 from "../_src/demos/core/Modal/Modal.demo.offset";
import * as m011 from "../_src/demos/core/Modal/Modal.demo.transitions";
import * as m012 from "../_src/demos/core/Modal/Modal.demo.transitionEnd";
import * as m013 from "../_src/demos/core/Modal/Modal.demo.initialFocus";
import * as m014 from "../_src/demos/core/Modal/Modal.demo.initialFocusTrap";
import * as m015 from "../_src/demos/core/Modal/Modal.demo.closeIcon";
import * as m016 from "../_src/demos/core/Modal/Modal.demo.composition";
import * as m017 from "../_src/demos/core/Modal/Modal.demo.stack";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "centered": m001.centered,
  "header": m002.header,
  "sizes": m003.sizes,
  "sizeAuto": m004.sizeAuto,
  "fullScreen": m005.fullScreen,
  "fullScreenMobile": m006.fullScreenMobile,
  "overlay": m007.overlay,
  "overflow": m008.overflow,
  "scrollarea": m009.scrollarea,
  "offset": m010.offset,
  "transitions": m011.transitions,
  "transitionEnd": m012.transitionEnd,
  "initialFocus": m013.initialFocus,
  "initialFocusTrap": m014.initialFocusTrap,
  "closeIcon": m015.closeIcon,
  "composition": m016.composition,
  "stack": m017.stack,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
