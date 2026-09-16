/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Basic";
import m001 from "./ToolbarBasic";
import m002 from "./Toolbar";
import m003 from "./Sizes";
import m004 from "./Vertical";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "ToolbarBasic": m001,
  "Toolbar": m002,
  "Sizes": m003,
  "Vertical": m004,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "Nested": {"code": "other", "codes": ["other"], "detail": "⏳ 공식 파일이 import 없이 문서 live 스코프 이름에 기댄다: ButtonGroup"},
};
