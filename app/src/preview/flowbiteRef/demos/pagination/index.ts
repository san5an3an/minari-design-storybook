/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./pagination.root";
import * as m001 from "./pagination.withIcons";
import * as m002 from "./pagination.navigation";
import * as m003 from "./pagination.navigationWithIcons";
import * as m004 from "./pagination.table";
import * as m005 from "./pagination.tableWithIcons";
import * as m006 from "./pagination.controlButtonText";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "pagination.root": m000.root,
  "pagination.withIcons": m001.withIcons,
  "pagination.navigation": m002.navigation,
  "pagination.navigationWithIcons": m003.navigationWithIcons,
  "pagination.table": m004.table,
  "pagination.tableWithIcons": m005.tableWithIcons,
  "pagination.controlButtonText": m006.controlButtonText,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
