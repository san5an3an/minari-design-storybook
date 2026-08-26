/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-trigger-size";
import D2 from "./02-controlled-mode";
import D3 from "./03-line-gradient";
import D4 from "./04-rendering-trigger-text";
import D5 from "./06-disabled-alpha";
import D6 from "./08-custom-trigger";
import D7 from "./09-custom-trigger-event";
import D8 from "./10-color-format";
import D9 from "./11-preset-colors";
import D10 from "./13-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic Usage": D0,
  "Trigger size": D1,
  "controlled mode": D2,
  "Line Gradient": D3,
  "Rendering Trigger Text": D4,
  "Disabled Alpha": D5,
  "Custom Trigger": D6,
  "Custom Trigger Event": D7,
  "Color Format": D8,
  "Preset Colors": D9,
  "Custom semantic dom styling": D10,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Disable": "이 예제 코드에 `export default` 가 없어서 무엇을 세울지 알 수 없어요.",
  "Clear Color": "이 예제 코드에 `export default` 가 없어서 무엇을 세울지 알 수 없어요.",
  "Custom Render Panel": "이 예제 코드에 `export default` 가 없어서 무엇을 세울지 알 수 없어요.",
};
