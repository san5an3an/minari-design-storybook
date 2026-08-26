/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-locale";
import D1 from "./01-direction";
import D2 from "./02-component-size";
import D3 from "./04-custom-wave";
import D4 from "./05-static-function";

export const DEMOS: DemoSet = {
  "Locale": D0,
  "Direction": D1,
  "Component size": D2,
  "Custom Wave": D3,
  "Static function": D4,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Theme": "이 예제 코드에 `export default` 가 없어서 무엇을 세울지 알 수 없어요.",
};
