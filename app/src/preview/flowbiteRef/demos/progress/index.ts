/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./progress.root";
import * as m001 from "./progress.withLabels";
import * as m002 from "./progress.positioning";
import * as m003 from "./progress.sizing";
import * as m004 from "./progress.colors";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "progress.root": m000.root,
  "progress.withLabels": m001.withLabels,
  "progress.positioning": m002.positioning,
  "progress.sizing": m003.sizing,
  "progress.colors": m004.colors,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
