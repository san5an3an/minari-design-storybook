/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./list.root";
import * as m001 from "./list.nested";
import * as m002 from "./list.unstyled";
import * as m003 from "./list.ordered";
import * as m004 from "./list.advanced";
import * as m005 from "./list.horizontal";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "list.root": m000.root,
  "list.nested": m001.nested,
  "list.unstyled": m002.unstyled,
  "list.ordered": m003.ordered,
  "list.advanced": m004.advanced,
  "list.horizontal": m005.horizontal,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "list.icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
