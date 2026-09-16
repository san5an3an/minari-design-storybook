import m000 from "./Basic";
import m001 from "./ToolbarBasic";
import m002 from "./Toolbar";
import m003 from "./Sizes";
import m004 from "./Vertical";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "ToolbarBasic": m001,
  "Toolbar": m002,
  "Sizes": m003,
  "Vertical": m004,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "Nested": {"code": "other", "codes": ["other"], "detail": "공식 파일이 import 없이 문서 사이트의 ButtonGroup 을 바로 써서 싣지 않았어요."},
};
