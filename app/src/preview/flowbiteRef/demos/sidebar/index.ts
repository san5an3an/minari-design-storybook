/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./sidebar.root";
import * as m001 from "./sidebar.dropdown";
import * as m002 from "./sidebar.dropdownWithChevron";
import * as m003 from "./sidebar.separator";
import * as m004 from "./sidebar.withButton";
import * as m005 from "./sidebar.withLogo";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "sidebar.root": m000.root,
  "sidebar.dropdown": m001.dropdown,
  "sidebar.dropdownWithChevron": m002.dropdownWithChevron,
  "sidebar.separator": m003.separator,
  "sidebar.withButton": m004.withButton,
  "sidebar.withLogo": m005.withLogo,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
