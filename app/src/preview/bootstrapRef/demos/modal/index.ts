import m000 from "./Static";
import m001 from "./Basic";
import m002 from "./StaticBackdrop";
import m003 from "./WithoutAnimation";
import m004 from "./Focus";
import m005 from "./DefaultSizing";
import m006 from "./FullScreen";
import m007 from "./CustomSizing";

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

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "VerticallyCentered": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
  "Grid": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
};
