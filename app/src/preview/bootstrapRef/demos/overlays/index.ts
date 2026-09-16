import m000 from "./Overlay";
import m001 from "./Trigger";
import m002 from "./TooltipOverlay";
import m003 from "./TooltipPositioned";
import m004 from "./PopoverPositioned";
import m005 from "./Disabled";
import m006 from "./PopoverContained";

export const DEMOS: Record<string, unknown> = {
  "Overlay": m000,
  "Trigger": m001,
  "TooltipOverlay": m002,
  "TooltipPositioned": m003,
  "PopoverPositioned": m004,
  "Disabled": m005,
  "PopoverContained": m006,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "TriggerRenderProp": {"code": "other", "codes": ["other"], "detail": "공식 파일이 import 없이 문서 사이트의 Tooltip 을 바로 써서 싣지 않았어요."},
  "TooltipInCopy": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
  "PopoverBasic": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
  "ScheduleUpdate": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
};
