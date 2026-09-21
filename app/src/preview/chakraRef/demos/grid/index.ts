import * as m000 from "./grid-basic";
import * as m001 from "./grid-with-col-span";
import * as m002 from "./grid-spanning-columns";

export const DEMOS = {
  "grid-basic": m000.GridBasic,
  "grid-with-col-span": m001.GridWithColSpan,
  "grid-spanning-columns": m002.GridSpanningColumns,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
