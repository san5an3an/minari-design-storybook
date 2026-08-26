/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-simple-popper";
import D1 from "./01-transitions-popper";
import D2 from "./03-positioned-popper";
import D3 from "./05-virtual-element-popper";

export const DEMOS: DemoSet = {
  "SimplePopper": D0,
  "TransitionsPopper": D1,
  "PositionedPopper": D2,
  "VirtualElementPopper": D3,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "SpringPopper": "이 예제는 우리가 안 가진 패키지(@react-spring/web)를 불러요.",
  "ScrollPlayground": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
  "PopperPopupState": "이 예제는 우리가 안 가진 패키지(material-ui-popup-state)를 불러요.",
};
