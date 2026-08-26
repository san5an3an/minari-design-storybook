/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-locale-text";
import D2 from "./02-placement";
import D3 from "./03-auto-shift";
import D4 from "./04-conditional-trigger";
import D5 from "./05-customize-icon";
import D6 from "./06-asynchronously-close";
import D7 from "./07-asynchronously-close-on-promise";
import D8 from "./08-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Locale text": D1,
  "Placement": D2,
  "Auto Shift": D3,
  "Conditional trigger": D4,
  "Customize icon": D5,
  "Asynchronously close": D6,
  "Asynchronously close on Promise": D7,
  "Custom semantic dom styling": D8,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
