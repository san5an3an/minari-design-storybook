import * as m000 from "./popover.root";
import * as m001 from "./popover.profile";
import * as m002 from "./popover.image";
import * as m003 from "./popover.password";
import * as m004 from "./popover.controlled";
import * as m005 from "./popover.placement";
import * as m006 from "./popover.trigger";
import * as m007 from "./popover.disableArrow";

export const DEMOS: Record<string, { component: unknown }> = {
  "popover.root": m000.root,
  "popover.profile": m001.profile,
  "popover.image": m002.image,
  "popover.password": m003.password,
  "popover.controlled": m004.controlled,
  "popover.placement": m005.placement,
  "popover.trigger": m006.trigger,
  "popover.disableArrow": m007.disableArrow,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
