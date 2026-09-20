import * as m000 from "./ToastExample";
import * as m001 from "./ToastCreateAsyncExample";

export const DEMOS = {
  "ToastExample": m000.ToastExample,
  "ToastCreateAsyncExample": m001.ToastCreateAsyncExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "App": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
};
