import * as m000 from "../_src/demos/core/FocusTrap/FocusTrap.demo.usage";
import * as m001 from "../_src/demos/core/FocusTrap/FocusTrap.demo.initial";
import * as m002 from "../_src/demos/core/Modal/Modal.demo.initialFocusTrap";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "initial": m001.initial,
  "initialFocusTrap": m002.initialFocusTrap,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
