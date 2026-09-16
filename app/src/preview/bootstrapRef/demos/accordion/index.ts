import m000 from "./Basic";
import m001 from "./AllCollapse";
import m002 from "./Flush";
import m003 from "./AlwaysOpen";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "AllCollapse": m001,
  "Flush": m002,
  "AlwaysOpen": m003,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "CustomToggle": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
  "ContextAwareToggle": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
};
