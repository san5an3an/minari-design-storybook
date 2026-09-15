import * as m000 from "./pagination.root";
import * as m001 from "./pagination.withIcons";
import * as m002 from "./pagination.navigation";
import * as m003 from "./pagination.navigationWithIcons";
import * as m004 from "./pagination.table";
import * as m005 from "./pagination.tableWithIcons";
import * as m006 from "./pagination.controlButtonText";

export const DEMOS: Record<string, { component: unknown }> = {
  "pagination.root": m000.root,
  "pagination.withIcons": m001.withIcons,
  "pagination.navigation": m002.navigation,
  "pagination.navigationWithIcons": m003.navigationWithIcons,
  "pagination.table": m004.table,
  "pagination.tableWithIcons": m005.tableWithIcons,
  "pagination.controlButtonText": m006.controlButtonText,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
