import * as m000 from "./popover.root";
import * as m001 from "./popover.profile";
import * as m002 from "./popover.image";
import * as m003 from "./popover.password";
import * as m004 from "./popover.placement";
import * as m005 from "./popover.trigger";
import * as m006 from "./popover.disableArrow";

export const DEMOS: Record<string, { component: unknown }> = {
  "popover.root": m000.root,
  "popover.profile": m001.profile,
  "popover.image": m002.image,
  "popover.password": m003.password,
  "popover.placement": m004.placement,
  "popover.trigger": m005.trigger,
  "popover.disableArrow": m006.disableArrow,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "popover.controlled": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
