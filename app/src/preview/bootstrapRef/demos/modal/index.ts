/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Static";
import m001 from "./Basic";
import m002 from "./StaticBackdrop";
import m003 from "./WithoutAnimation";
import m004 from "./Focus";
import m005 from "./DefaultSizing";
import m006 from "./FullScreen";
import m007 from "./CustomSizing";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Static": m000,
  "Basic": m001,
  "StaticBackdrop": m002,
  "WithoutAnimation": m003,
  "Focus": m004,
  "DefaultSizing": m005,
  "FullScreen": m006,
  "CustomSizing": m007,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "VerticallyCentered": {"code": "other", "codes": ["other"], "detail": "⏳ export 없는 `render(<…/>)` 스크립트 — 공식 문서는 noInline 으로 `render` 를 주입해 세운다(계약에 주입 자리 없음 · 판 7 거리)"},
  "Grid": {"code": "other", "codes": ["other"], "detail": "⏳ export 없는 `render(<…/>)` 스크립트 — 공식 문서는 noInline 으로 `render` 를 주입해 세운다(계약에 주입 자리 없음 · 판 7 거리)"},
};
