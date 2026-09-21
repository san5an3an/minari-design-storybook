import * as m000 from "../_src/demos/core/ScrollArea/ScrollArea.demo.usage";
import * as m001 from "../_src/demos/core/ScrollArea/ScrollArea.demo.horizontal";
import * as m002 from "../_src/demos/core/ScrollArea/ScrollArea.demo.scrollbars";
import * as m003 from "../_src/demos/core/ScrollArea/ScrollArea.demo.scrollPosition";
import * as m004 from "../_src/demos/core/ScrollArea/ScrollArea.demo.scrollTo";
import * as m005 from "../_src/demos/core/ScrollArea/ScrollArea.demo.stylesApi";
import * as m006 from "../_src/demos/core/ScrollArea/ScrollArea.demo.scrollIntoView";
import * as m007 from "../_src/demos/core/ScrollArea/ScrollArea.demo.maxHeight";
import * as m008 from "../_src/demos/core/ScrollArea/ScrollArea.demo.autosizePopover";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "horizontal": m001.horizontal,
  "scrollbars": m002.scrollbars,
  "scrollPosition": m003.scrollPosition,
  "scrollTo": m004.scrollTo,
  "stylesApi": m005.stylesApi,
  "scrollIntoView": m006.scrollIntoView,
  "maxHeight": m007.maxHeight,
  "autosizePopover": m008.autosizePopover,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
