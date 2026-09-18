/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./collapsible-basic";
import * as m003 from "./collapsible-with-disabled";
import * as m004 from "./collapsible-controlled";
import * as m005 from "./collapsible-with-store";
import * as m006 from "./collapsible-lazy-mounted";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "collapsible-basic": m000.CollapsibleBasic,
  "collapsible-with-disabled": m003.CollapsibleWithDisabled,
  "collapsible-controlled": m004.CollapsibleControlled,
  "collapsible-with-store": m005.CollapsibleWithStore,
  "collapsible-lazy-mounted": m006.CollapsibleLazyMounted,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "collapsible-initial-open": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "collapsible-partial-height": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
};
