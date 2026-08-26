/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-three-sizes-of-input";
import D2 from "./02-variants";
import D3 from "./03-compact-style";
import D4 from "./04-search-box";
import D5 from "./05-search-box-with-loading";
import D6 from "./06-textarea";
import D7 from "./07-autosizing-the-height-to-fit-the-content";
import D8 from "./08-otp";
import D9 from "./09-format-tooltip-input";
import D10 from "./10-prefix-and-suffix";
import D11 from "./11-password-box";
import D12 from "./12-with-clear-icon";
import D13 from "./13-with-character-counting";
import D14 from "./15-status";
import D15 from "./16-focus";
import D16 from "./17-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic usage": D0,
  "Three sizes of Input": D1,
  "Variants": D2,
  "Compact Style": D3,
  "Search box": D4,
  "Search box with loading": D5,
  "TextArea": D6,
  "Autosizing the height to fit the content": D7,
  "OTP": D8,
  "Format Tooltip Input": D9,
  "prefix and suffix": D10,
  "Password box": D11,
  "With clear icon": D12,
  "With character counting": D13,
  "Status": D14,
  "Focus": D15,
  "Custom semantic dom styling": D16,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "= 5.10.0\">Custom count logic": "이 예제는 우리가 안 가진 패키지(runes2)를 불러요.",
};
