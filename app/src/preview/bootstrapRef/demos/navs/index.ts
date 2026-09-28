/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Basic";
import m001 from "./List";
import m002 from "./Alignment";
import m003 from "./Stacked";
import m004 from "./Tabs";
import m005 from "./Pills";
import m006 from "./Underline";
import m007 from "./Fill";
import m008 from "./Justified";
import m009 from "./DropdownImpl";
import m010 from "./Dropdown";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "List": m001,
  "Alignment": m002,
  "Stacked": m003,
  "Tabs": m004,
  "Pills": m005,
  "Underline": m006,
  "Fill": m007,
  "Justified": m008,
  "DropdownImpl": m009,
  "Dropdown": m010,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
