/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./buttonGroup.root";
import * as m001 from "./buttonGroup.withIcons";
import * as m002 from "./buttonGroup.outline";
import * as m003 from "./buttonGroup.outlineWithIcons";
import * as m004 from "./buttonGroup.colorOptions";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "buttonGroup.root": m000.root,
  "buttonGroup.withIcons": m001.withIcons,
  "buttonGroup.outline": m002.outline,
  "buttonGroup.outlineWithIcons": m003.outlineWithIcons,
  "buttonGroup.colorOptions": m004.colorOptions,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
