/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Default";
import m001 from "./Active";
import m002 from "./Disabled";
import m003 from "./Linked";
import m004 from "./Flush";
import m005 from "./Numbered";
import m006 from "./NumberedCustom";
import m007 from "./Horizontal";
import m008 from "./HorizontalResponsive";
import m009 from "./Style";
import m010 from "./StyleActions";
import m011 from "./Tabs";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Default": m000,
  "Active": m001,
  "Disabled": m002,
  "Linked": m003,
  "Flush": m004,
  "Numbered": m005,
  "NumberedCustom": m006,
  "Horizontal": m007,
  "HorizontalResponsive": m008,
  "Style": m009,
  "StyleActions": m010,
  "Tabs": m011,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
