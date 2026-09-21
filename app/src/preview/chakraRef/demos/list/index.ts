/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./list-basic";
import * as m001 from "./list-ordered";
import * as m002 from "./list-with-icon";
import * as m003 from "./list-nested";
import * as m004 from "./list-with-marker-style";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "list-basic": m000.ListBasic,
  "list-ordered": m001.ListOrdered,
  "list-with-icon": m002.ListWithIcon,
  "list-nested": m003.ListNested,
  "list-with-marker-style": m004.ListWithMarkerStyle,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
