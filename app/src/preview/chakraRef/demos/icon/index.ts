/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./icon-basic";
import * as m001 from "./icon-with-react-icon";
import * as m002 from "./icon-with-custom-svg";
import * as m003 from "./icon-with-create-icon";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "icon-basic": m000.IconBasic,
  "icon-with-react-icon": m001.IconWithReactIcon,
  "icon-with-custom-svg": m002.IconWithCustomSvg,
  "icon-with-create-icon": m003.IconWithCreateIcon,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
