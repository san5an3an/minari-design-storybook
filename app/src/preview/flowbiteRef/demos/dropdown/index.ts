import * as m000 from "./dropdown.root";
import * as m001 from "./dropdown.divider";
import * as m002 from "./dropdown.header";
import * as m003 from "./dropdown.itemsWithIcon";
import * as m004 from "./dropdown.inline";
import * as m005 from "./dropdown.sizes";
import * as m006 from "./dropdown.placement";
import * as m007 from "./dropdown.events";
import * as m008 from "./dropdown.customTrigger";
import * as m009 from "./dropdown.customItem";

export const DEMOS: Record<string, { component: unknown }> = {
  "dropdown.root": m000.root,
  "dropdown.divider": m001.divider,
  "dropdown.header": m002.header,
  "dropdown.itemsWithIcon": m003.itemsWithIcon,
  "dropdown.inline": m004.inline,
  "dropdown.sizes": m005.sizes,
  "dropdown.placement": m006.placement,
  "dropdown.events": m007.events,
  "dropdown.customTrigger": m008.customTrigger,
  "dropdown.customItem": m009.customItem,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
