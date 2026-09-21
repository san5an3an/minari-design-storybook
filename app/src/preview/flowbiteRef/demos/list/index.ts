import * as m000 from "./list.root";
import * as m001 from "./list.icon";
import * as m002 from "./list.nested";
import * as m003 from "./list.unstyled";
import * as m004 from "./list.ordered";
import * as m005 from "./list.advanced";
import * as m006 from "./list.horizontal";

export const DEMOS: Record<string, { component: unknown }> = {
  "list.root": m000.root,
  "list.icon": m001.icon,
  "list.nested": m002.nested,
  "list.unstyled": m003.unstyled,
  "list.ordered": m004.ordered,
  "list.advanced": m005.advanced,
  "list.horizontal": m006.horizontal,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
