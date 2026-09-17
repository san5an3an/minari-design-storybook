/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./MenuExample";
import * as m001 from "./MenuBasicExample";
import * as m002 from "./DropdownMenuExample";
import * as m003 from "./MenuSubmenuExample";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "MenuExample": m000.MenuExample,
  "MenuBasicExample": m001.default,
  "DropdownMenuExample": m002.DropdownMenuExample,
  "MenuSubmenuExample": m003.default,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
  "MenuItemExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: "},
};
