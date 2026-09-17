import * as m000 from "./modal.root";
import * as m001 from "./modal.dismissible";
import * as m002 from "./modal.popup";
import * as m003 from "./modal.withFormElements";
import * as m004 from "./modal.initialFocus";
import * as m005 from "./modal.sizes";
import * as m006 from "./modal.position";

export const DEMOS: Record<string, { component: unknown }> = {
  "modal.root": m000.root,
  "modal.dismissible": m001.dismissible,
  "modal.popup": m002.popup,
  "modal.withFormElements": m003.withFormElements,
  "modal.initialFocus": m004.initialFocus,
  "modal.sizes": m005.sizes,
  "modal.position": m006.position,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
