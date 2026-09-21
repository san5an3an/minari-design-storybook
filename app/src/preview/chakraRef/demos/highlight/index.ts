import * as m000 from "./highlight-basic";
import * as m001 from "./highlight-multiple";
import * as m002 from "./highlight-with-custom-style";
import * as m003 from "./highlight-search-query";
import * as m004 from "./highlight-with-squiggle";

export const DEMOS = {
  "highlight-basic": m000.HighlightBasic,
  "highlight-multiple": m001.HighlightMultiple,
  "highlight-with-custom-style": m002.HighlightWithCustomStyle,
  "highlight-search-query": m003.HighlightSearchQuery,
  "highlight-with-squiggle": m004.HighlightWithSquiggle,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
