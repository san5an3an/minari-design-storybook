/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-disabled";
import D2 from "./02-centered";
import D3 from "./03-icon";
import D4 from "./04-indicator";
import D5 from "./05-slide";
import D6 from "./06-extra-content";
import D7 from "./07-size";
import D8 from "./08-placement";
import D9 from "./09-custom-popup-search";
import D10 from "./10-card-type-tab";
import D11 from "./11-add-close-tab";
import D12 from "./12-customized-trigger-of-new-tab";
import D13 from "./14-draggable-tabs";
import D14 from "./15-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Disabled": D1,
  "Centered": D2,
  "Icon": D3,
  "Indicator": D4,
  "Slide": D5,
  "Extra content": D6,
  "Size": D7,
  "Placement": D8,
  "Custom Popup Search": D9,
  "Card type tab": D10,
  "Add & close tab": D11,
  "Customized trigger of new tab": D12,
  "Draggable Tabs": D13,
  "Custom semantic dom styling": D14,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Customized bar of tab": "이 예제는 우리가 안 가진 패키지(react-sticky-box)를 불러요.",
};
