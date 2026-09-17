/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./tabs.root";
import * as m001 from "./tabs.withUnderline";
import * as m002 from "./tabs.withIcons";
import * as m003 from "./tabs.withPills";
import * as m004 from "./tabs.fullWidth";
import * as m005 from "./tabs.stateOptions";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "tabs.root": m000.root,
  "tabs.withUnderline": m001.withUnderline,
  "tabs.withIcons": m002.withIcons,
  "tabs.withPills": m003.withPills,
  "tabs.fullWidth": m004.fullWidth,
  "tabs.stateOptions": m005.stateOptions,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
