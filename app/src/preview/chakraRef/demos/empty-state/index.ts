/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./empty-state-basic";
import * as m001 from "./empty-state-sizes";
import * as m002 from "./empty-state-with-action";
import * as m003 from "./empty-state-with-list";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "empty-state-basic": m000.EmptyStateBasic,
  "empty-state-sizes": m001.EmptyStateSizes,
  "empty-state-with-action": m002.EmptyStateWithAction,
  "empty-state-with-list": m003.EmptyStateWithList,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
