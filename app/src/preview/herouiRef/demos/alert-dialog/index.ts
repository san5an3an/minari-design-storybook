import * as m000 from "./default";
import * as m001 from "./statuses";
import * as m002 from "./placements";
import * as m003 from "./sizes";
import * as m004 from "./controlled";
import * as m005 from "./custom-icon";
import * as m006 from "./custom-trigger";
import * as m007 from "./backdrop-variants";
import * as m008 from "./custom-backdrop";
import * as m009 from "./dismiss-behavior";
import * as m010 from "./close-methods";
import * as m011 from "./custom-animations";
import * as m012 from "./custom-portal";
import * as m013 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "statuses": m001.Statuses,
  "placements": m002.Placements,
  "sizes": m003.Sizes,
  "controlled": m004.Controlled,
  "custom-icon": m005.CustomIcon,
  "custom-trigger": m006.CustomTrigger,
  "backdrop-variants": m007.BackdropVariants,
  "custom-backdrop": m008.CustomBackdrop,
  "dismiss-behavior": m009.DismissBehavior,
  "close-methods": m010.CloseMethods,
  "custom-animations": m011.CustomAnimations,
  "custom-portal": m012.CustomPortal,
  "custom-styles": m013.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
