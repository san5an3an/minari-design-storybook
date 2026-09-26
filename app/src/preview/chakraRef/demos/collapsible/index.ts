import * as m000 from "./collapsible-basic";
import * as m001 from "./collapsible-initial-open";
import * as m002 from "./collapsible-partial-height";
import * as m003 from "./collapsible-with-disabled";
import * as m004 from "./collapsible-controlled";
import * as m005 from "./collapsible-with-store";
import * as m006 from "./collapsible-lazy-mounted";

export const DEMOS = {
  "collapsible-basic": m000.CollapsibleBasic,
  "collapsible-initial-open": m001.CollapsibleInitialOpen,
  "collapsible-partial-height": m002.CollapsiblePartialHeight,
  "collapsible-with-disabled": m003.CollapsibleWithDisabled,
  "collapsible-controlled": m004.CollapsibleControlled,
  "collapsible-with-store": m005.CollapsibleWithStore,
  "collapsible-lazy-mounted": m006.CollapsibleLazyMounted,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
