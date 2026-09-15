import * as m000 from "./modal.root";
import * as m001 from "./modal.dismissible";
import * as m002 from "./modal.withFormElements";
import * as m003 from "./modal.initialFocus";
import * as m004 from "./modal.sizes";
import * as m005 from "./modal.position";

export const DEMOS: Record<string, { component: unknown }> = {
  "modal.root": m000.root,
  "modal.dismissible": m001.dismissible,
  "modal.withFormElements": m002.withFormElements,
  "modal.initialFocus": m003.initialFocus,
  "modal.sizes": m004.sizes,
  "modal.position": m005.position,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "modal.popup": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
