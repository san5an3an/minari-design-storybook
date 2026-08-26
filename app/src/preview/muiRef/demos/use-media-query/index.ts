/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-simple-media-query";
import D1 from "./01-theme-helper";
import D2 from "./04-use-width";

export const DEMOS: DemoSet = {
  "SimpleMediaQuery": D0,
  "ThemeHelper": D1,
  "UseWidth": D2,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "JavaScriptMedia": "이 예제는 우리가 안 가진 패키지(json2mq)를 불러요.",
  "ServerSide": "이 예제는 우리가 안 가진 패키지(css-mediaquery)를 불러요.",
};
