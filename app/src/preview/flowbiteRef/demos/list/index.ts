/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./list.root";
import * as m001 from "./list.icon";
import * as m002 from "./list.nested";
import * as m003 from "./list.unstyled";
import * as m004 from "./list.ordered";
import * as m005 from "./list.advanced";
import * as m006 from "./list.horizontal";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "list.root": m000.root,
  "list.icon": m001.icon,
  "list.nested": m002.nested,
  "list.unstyled": m003.unstyled,
  "list.ordered": m004.ordered,
  "list.advanced": m005.advanced,
  "list.horizontal": m006.horizontal,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
