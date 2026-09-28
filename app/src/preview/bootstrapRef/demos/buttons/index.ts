/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Types";
import m001 from "./OutlineTypes";
import m002 from "./TagTypes";
import m003 from "./Sizes";
import m004 from "./Block";
import m005 from "./Active";
import m006 from "./Disabled";
import m007 from "./Loading";
import m008 from "./ToggleButton";
import m009 from "./ToggleButtonGroupUncontrolled";
import m010 from "./ToggleButtonGroupControlled";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Types": m000,
  "OutlineTypes": m001,
  "TagTypes": m002,
  "Sizes": m003,
  "Block": m004,
  "Active": m005,
  "Disabled": m006,
  "Loading": m007,
  "ToggleButton": m008,
  "ToggleButtonGroupUncontrolled": m009,
  "ToggleButtonGroupControlled": m010,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
