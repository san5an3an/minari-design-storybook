/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./hotkeyModifierExample-tsx";
import * as m001 from "./hotkeyTesterExample-tsx";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "hotkeyModifierExample-tsx": m000.HotkeyModifierExample,
  "hotkeyTesterExample-tsx": m001.HotkeyTesterExample,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
  "useHotkeysExample-tsx": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: audio"},
  "use-hotkeys-mdx": {"reason": "U-3", "detail": "펜스 완결 코드 — 공식 사이트가 렌더하지 않는 코드를 예제로 칠지 사용자 판단 대기(ADR §10 U-3)"},
};
