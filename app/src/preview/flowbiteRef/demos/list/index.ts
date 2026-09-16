import * as m000 from "./list.root";
import * as m001 from "./list.nested";
import * as m002 from "./list.unstyled";
import * as m003 from "./list.ordered";
import * as m004 from "./list.advanced";
import * as m005 from "./list.horizontal";

export const DEMOS: Record<string, { component: unknown }> = {
  "list.root": m000.root,
  "list.nested": m001.nested,
  "list.unstyled": m002.unstyled,
  "list.ordered": m003.ordered,
  "list.advanced": m004.advanced,
  "list.horizontal": m005.horizontal,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "list.icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
