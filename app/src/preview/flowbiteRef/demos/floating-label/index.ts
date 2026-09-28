/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./floatingLabel.root";
import * as m001 from "./floatingLabel.disabled";
import * as m002 from "./floatingLabel.validation";
import * as m003 from "./floatingLabel.sizes";
import * as m004 from "./floatingLabel.helperText";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "floatingLabel.root": m000.root,
  "floatingLabel.disabled": m001.disabled,
  "floatingLabel.validation": m002.validation,
  "floatingLabel.sizes": m003.sizes,
  "floatingLabel.helperText": m004.helperText,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
