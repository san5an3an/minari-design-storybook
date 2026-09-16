/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./navbar.root";
import * as m001 from "./navbar.withCTAButton";
import * as m002 from "./navbar.withDropdown";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "navbar.root": m000.root,
  "navbar.withCTAButton": m001.withCTAButton,
  "navbar.withDropdown": m002.withDropdown,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
