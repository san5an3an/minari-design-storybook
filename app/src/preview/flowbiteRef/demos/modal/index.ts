/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./modal.root";
import * as m001 from "./modal.dismissible";
import * as m002 from "./modal.withFormElements";
import * as m003 from "./modal.initialFocus";
import * as m004 from "./modal.sizes";
import * as m005 from "./modal.position";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "modal.root": m000.root,
  "modal.dismissible": m001.dismissible,
  "modal.withFormElements": m002.withFormElements,
  "modal.initialFocus": m003.initialFocus,
  "modal.sizes": m004.sizes,
  "modal.position": m005.position,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "modal.popup": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
