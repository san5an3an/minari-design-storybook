/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./kbd.root";
import * as m001 from "./kbd.insideText";
import * as m002 from "./kbd.letterKeys";
import * as m003 from "./kbd.numberKeys";
import * as m004 from "./kbd.functionKeys";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "kbd.root": m000.root,
  "kbd.insideText": m001.insideText,
  "kbd.letterKeys": m002.letterKeys,
  "kbd.numberKeys": m003.numberKeys,
  "kbd.functionKeys": m004.functionKeys,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "kbd.insideTable": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "kbd.arrowKeys": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
