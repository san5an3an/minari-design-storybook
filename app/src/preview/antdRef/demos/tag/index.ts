/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-colorful-tag";
import D2 from "./02-add-remove-dynamically";
import D3 from "./03-checkable";
import D4 from "./05-icon";
import D5 from "./06-status-tag";
import D6 from "./07-draggable-tag";
import D7 from "./08-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Colorful Tag": D1,
  "Add & Remove Dynamically": D2,
  "Checkable": D3,
  "Icon": D4,
  "Status Tag": D5,
  "Draggable Tag": D6,
  "Custom semantic dom styling": D7,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Animate": "이 예제는 우리가 안 가진 패키지(motion/react)를 불러요.",
};
