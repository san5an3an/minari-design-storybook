/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./banner.root";
import * as m001 from "./banner.bottomPosition";
import * as m002 from "./banner.marketingCTA";
import * as m003 from "./banner.newsletter";
import * as m004 from "./banner.informational";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "banner.root": m000.root,
  "banner.bottomPosition": m001.bottomPosition,
  "banner.marketingCTA": m002.marketingCTA,
  "banner.newsletter": m003.newsletter,
  "banner.informational": m004.informational,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
