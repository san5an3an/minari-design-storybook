import * as m000 from "./kbd.root";
import * as m001 from "./kbd.insideText";
import * as m002 from "./kbd.letterKeys";
import * as m003 from "./kbd.numberKeys";
import * as m004 from "./kbd.functionKeys";

export const DEMOS: Record<string, { component: unknown }> = {
  "kbd.root": m000.root,
  "kbd.insideText": m001.insideText,
  "kbd.letterKeys": m002.letterKeys,
  "kbd.numberKeys": m003.numberKeys,
  "kbd.functionKeys": m004.functionKeys,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "kbd.insideTable": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "kbd.arrowKeys": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
