/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-disabled";
import D2 from "./02-controlled-checkbox";
import D3 from "./03-checkbox-group";
import D4 from "./04-check-all";
import D5 from "./05-use-with-grid";
import D6 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Disabled": D1,
  "Controlled Checkbox": D2,
  "Checkbox Group": D3,
  "Check all": D4,
  "Use with Grid": D5,
  "Custom semantic dom styling": D6,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
