/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./rating.root";
import * as m001 from "./rating.withText";
import * as m002 from "./rating.count";
import * as m003 from "./rating.sizing";
import * as m004 from "./rating.advanced";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "rating.root": m000.root,
  "rating.withText": m001.withText,
  "rating.count": m002.count,
  "rating.sizing": m003.sizing,
  "rating.advanced": m004.advanced,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
