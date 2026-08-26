/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-popover";
import D1 from "./02-mouse-hover-popover";
import D2 from "./03-virtual-element-popover";

export const DEMOS: DemoSet = {
  "BasicPopover": D0,
  "MouseHoverPopover": D1,
  "VirtualElementPopover": D2,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "AnchorPlayground": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
  "PopoverPopupState": "이 예제는 우리가 안 가진 패키지(material-ui-popup-state)를 불러요.",
};
