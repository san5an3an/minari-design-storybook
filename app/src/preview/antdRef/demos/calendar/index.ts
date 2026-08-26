/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-notice-calendar";
import D2 from "./02-event-range";
import D3 from "./03-card";
import D4 from "./04-selectable-calendar";
import D5 from "./06-show-week";
import D6 from "./07-customize-header";
import D7 from "./08-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Notice Calendar": D1,
  "Event Range": D2,
  "Card": D3,
  "Selectable Calendar": D4,
  "Show Week": D5,
  "Customize Header": D6,
  "Custom semantic dom styling": D7,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Lunar Calendar": "이 예제는 우리가 안 가진 패키지(lunar-typescript)를 불러요.",
};
