import * as m000 from "./list-basic";
import * as m001 from "./list-ordered";
import * as m002 from "./list-with-icon";
import * as m003 from "./list-nested";
import * as m004 from "./list-with-marker-style";

export const DEMOS = {
  "list-basic": m000.ListBasic,
  "list-ordered": m001.ListOrdered,
  "list-with-icon": m002.ListWithIcon,
  "list-nested": m003.ListNested,
  "list-with-marker-style": m004.ListWithMarkerStyle,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
