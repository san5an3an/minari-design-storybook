export const DEMOS = {
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "useHotkeysExample-tsx": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "hotkeyModifierExample-tsx": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "hotkeyTesterExample-tsx": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "use-hotkeys-mdx": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
};
