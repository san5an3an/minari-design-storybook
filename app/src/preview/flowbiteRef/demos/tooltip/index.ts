/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./tooltip.root";
import * as m001 from "./tooltip.styles";
import * as m002 from "./tooltip.placement";
import * as m003 from "./tooltip.trigger";
import * as m004 from "./tooltip.animation";
import * as m005 from "./tooltip.disableArrow";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "tooltip.root": m000.root,
  "tooltip.styles": m001.styles,
  "tooltip.placement": m002.placement,
  "tooltip.trigger": m003.trigger,
  "tooltip.animation": m004.animation,
  "tooltip.disableArrow": m005.disableArrow,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
