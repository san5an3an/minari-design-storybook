import * as m000 from "./ToastCreateAsyncExample";

export const DEMOS = {
  "ToastCreateAsyncExample": m000.ToastCreateAsyncExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "ToastExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: "},
  "App": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
};
