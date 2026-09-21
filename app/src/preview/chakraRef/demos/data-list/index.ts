import * as m000 from "./data-list-basic";
import * as m001 from "./data-list-with-sizes";
import * as m002 from "./data-list-with-variants";
import * as m003 from "./data-list-with-orientation";
import * as m004 from "./data-list-with-info";
import * as m005 from "./data-list-with-separator";

export const DEMOS = {
  "data-list-basic": m000.DataListBasic,
  "data-list-with-sizes": m001.DataListWithSizes,
  "data-list-with-variants": m002.DataListWithVariants,
  "data-list-with-orientation": m003.DataListWithOrientation,
  "data-list-with-info": m004.DataListWithInfo,
  "data-list-with-separator": m005.DataListWithSeparator,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
