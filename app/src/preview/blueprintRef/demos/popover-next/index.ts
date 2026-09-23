/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./popoverNextExample-tsx__reactExample__1";
import * as m001 from "./popoverNextPlacementExample-tsx__reactExample__1";
import * as m002 from "./popoverNextInteractionKindExample-tsx__reactExample__1";
import * as m003 from "./popoverNextPortalExample-tsx__reactExample__1";
import * as m004 from "./popoverNextSizingExample-tsx__reactExample__1";
import * as m005 from "./popoverNextMinimalExample-tsx__reactExample__1";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "popoverNextExample-tsx__reactExample__1": m000.PopoverNextExample,
  "popoverNextPlacementExample-tsx__reactExample__1": m001.PopoverNextPlacementExample,
  "popoverNextInteractionKindExample-tsx__reactExample__1": m002.PopoverNextInteractionKindExample,
  "popoverNextPortalExample-tsx__reactExample__1": m003.PopoverNextPortalExample,
  "popoverNextSizingExample-tsx__reactExample__1": m004.PopoverNextSizingExample,
  "popoverNextMinimalExample-tsx__reactExample__1": m005.PopoverNextMinimalExample,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
  "popover-next-mdx__fence__1": {"reason": "U-3", "detail": "펜스 완결 코드 — 공식 사이트가 렌더하지 않는 코드를 예제로 칠지 사용자 판단 대기(ADR §10 U-3)"},
  "popover-next-mdx__fence__2": {"reason": "U-3", "detail": "펜스 완결 코드 — 공식 사이트가 렌더하지 않는 코드를 예제로 칠지 사용자 판단 대기(ADR §10 U-3)"},
};
