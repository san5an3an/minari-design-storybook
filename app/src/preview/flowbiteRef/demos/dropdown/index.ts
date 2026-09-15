import * as m000 from "./dropdown.root";
import * as m001 from "./dropdown.divider";
import * as m002 from "./dropdown.header";
import * as m003 from "./dropdown.inline";
import * as m004 from "./dropdown.sizes";
import * as m005 from "./dropdown.placement";
import * as m006 from "./dropdown.events";
import * as m007 from "./dropdown.customTrigger";
import * as m008 from "./dropdown.customItem";

export const DEMOS: Record<string, { component: unknown }> = {
  "dropdown.root": m000.root,
  "dropdown.divider": m001.divider,
  "dropdown.header": m002.header,
  "dropdown.inline": m003.inline,
  "dropdown.sizes": m004.sizes,
  "dropdown.placement": m005.placement,
  "dropdown.events": m006.events,
  "dropdown.customTrigger": m007.customTrigger,
  "dropdown.customItem": m008.customItem,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "dropdown.itemsWithIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
