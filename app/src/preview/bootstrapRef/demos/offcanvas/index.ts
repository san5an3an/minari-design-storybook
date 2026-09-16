/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Basic";
import m001 from "./Responsive";
import m002 from "./StaticBackdrop";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Responsive": m001,
  "StaticBackdrop": m002,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "Placement": {"code": "other", "codes": ["other"], "detail": "⏳ export 없는 `render(<…/>)` 스크립트 — 공식 문서는 noInline 으로 `render` 를 주입해 세운다(계약에 주입 자리 없음 · 판 7 거리)"},
  "Backdrop": {"code": "other", "codes": ["other"], "detail": "⏳ export 없는 `render(<…/>)` 스크립트 — 공식 문서는 noInline 으로 `render` 를 주입해 세운다(계약에 주입 자리 없음 · 판 7 거리)"},
};
