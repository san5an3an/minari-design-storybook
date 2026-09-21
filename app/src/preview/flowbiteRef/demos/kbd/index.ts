import * as m000 from "./kbd.root";
import * as m001 from "./kbd.insideText";
import * as m002 from "./kbd.insideTable";
import * as m003 from "./kbd.arrowKeys";
import * as m004 from "./kbd.letterKeys";
import * as m005 from "./kbd.numberKeys";
import * as m006 from "./kbd.functionKeys";

export const DEMOS: Record<string, { component: unknown }> = {
  "kbd.root": m000.root,
  "kbd.insideText": m001.insideText,
  "kbd.insideTable": m002.insideTable,
  "kbd.arrowKeys": m003.arrowKeys,
  "kbd.letterKeys": m004.letterKeys,
  "kbd.numberKeys": m005.numberKeys,
  "kbd.functionKeys": m006.functionKeys,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
