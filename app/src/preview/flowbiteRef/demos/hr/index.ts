/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./hr.root";
import * as m001 from "./hr.trimmed";
import * as m002 from "./hr.icon";
import * as m003 from "./hr.text";
import * as m004 from "./hr.square";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "hr.root": m000.root,
  "hr.trimmed": m001.trimmed,
  "hr.icon": m002.icon,
  "hr.text": m003.text,
  "hr.square": m004.square,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
