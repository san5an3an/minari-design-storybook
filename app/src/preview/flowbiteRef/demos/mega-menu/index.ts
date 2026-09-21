/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./megaMenu.root";
import * as m001 from "./megaMenu.icons";
import * as m002 from "./megaMenu.fullWidth";
import * as m003 from "./megaMenu.fullWidthCTA";
import * as m004 from "./megaMenu.fullWidthImage";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "megaMenu.root": m000.root,
  "megaMenu.icons": m001.icons,
  "megaMenu.fullWidth": m002.fullWidth,
  "megaMenu.fullWidthCTA": m003.fullWidthCTA,
  "megaMenu.fullWidthImage": m004.fullWidthImage,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
