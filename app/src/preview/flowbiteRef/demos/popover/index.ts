/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./popover.root";
import * as m001 from "./popover.profile";
import * as m002 from "./popover.image";
import * as m003 from "./popover.password";
import * as m004 from "./popover.controlled";
import * as m005 from "./popover.placement";
import * as m006 from "./popover.trigger";
import * as m007 from "./popover.disableArrow";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "popover.root": m000.root,
  "popover.profile": m001.profile,
  "popover.image": m002.image,
  "popover.password": m003.password,
  "popover.controlled": m004.controlled,
  "popover.placement": m005.placement,
  "popover.trigger": m006.trigger,
  "popover.disableArrow": m007.disableArrow,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
