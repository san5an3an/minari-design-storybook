/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Basic";
import m001 from "./Small";
import m002 from "./Dark";
import m003 from "./StripedRow";
import m004 from "./StripedColumns";
import m005 from "./Responsive";
import m006 from "./ResponsiveBreakpoints";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Small": m001,
  "Dark": m002,
  "StripedRow": m003,
  "StripedColumns": m004,
  "Responsive": m005,
  "ResponsiveBreakpoints": m006,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
