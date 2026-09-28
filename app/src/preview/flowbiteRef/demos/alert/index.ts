/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./alert.root";
import * as m001 from "./alert.withIcon";
import * as m002 from "./alert.dismissible";
import * as m003 from "./alert.rounded";
import * as m004 from "./alert.borderAccent";
import * as m005 from "./alert.additionalContent";
import * as m006 from "./alert.allOptions";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "alert.root": m000.root,
  "alert.withIcon": m001.withIcon,
  "alert.dismissible": m002.dismissible,
  "alert.rounded": m003.rounded,
  "alert.borderAccent": m004.borderAccent,
  "alert.additionalContent": m005.additionalContent,
  "alert.allOptions": m006.allOptions,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
