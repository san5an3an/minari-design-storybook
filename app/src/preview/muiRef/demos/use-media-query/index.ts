import type { DemoSet } from "../types";
import D0 from "./00-simple-media-query";
import D1 from "./01-theme-helper";
import D2 from "./04-use-width";

export const DEMOS: DemoSet = {
  "SimpleMediaQuery": D0,
  "ThemeHelper": D1,
  "UseWidth": D2,
};

export const SKIPPED: Record<string, string> = {
  "JavaScriptMedia": "이 예제는 우리가 안 가진 패키지(json2mq)를 불러요.",
  "ServerSide": "이 예제는 우리가 안 가진 패키지(css-mediaquery)를 불러요.",
};
