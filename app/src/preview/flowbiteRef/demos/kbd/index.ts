/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./kbd.root";
import * as m001 from "./kbd.insideText";
import * as m002 from "./kbd.insideTable";
import * as m003 from "./kbd.arrowKeys";
import * as m004 from "./kbd.letterKeys";
import * as m005 from "./kbd.numberKeys";
import * as m006 from "./kbd.functionKeys";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "kbd.root": m000.root,
  "kbd.insideText": m001.insideText,
  "kbd.insideTable": m002.insideTable,
  "kbd.arrowKeys": m003.arrowKeys,
  "kbd.letterKeys": m004.letterKeys,
  "kbd.numberKeys": m005.numberKeys,
  "kbd.functionKeys": m006.functionKeys,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
