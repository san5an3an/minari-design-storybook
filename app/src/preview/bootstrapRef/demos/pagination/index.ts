import m000 from "./Advanced";

export const DEMOS: Record<string, unknown> = {
  "Advanced": m000,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "Basic": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
};
