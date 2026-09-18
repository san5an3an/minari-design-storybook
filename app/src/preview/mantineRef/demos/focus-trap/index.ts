import * as m000 from "./usage";
import * as m001 from "./initial";
import * as m002 from "./initialFocusTrap";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "initial": m001.initial,
  "initialFocusTrap": m002.initialFocusTrap,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
