import * as m000 from "./hotkeyModifierExample-tsx";
import * as m001 from "./hotkeyTesterExample-tsx";

export const DEMOS = {
  "hotkeyModifierExample-tsx": m000.HotkeyModifierExample,
  "hotkeyTesterExample-tsx": m001.HotkeyTesterExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "useHotkeysExample-tsx": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: audio"},
  "use-hotkeys-mdx": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
};
