/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-one-way";
import D2 from "./02-search";
import D3 from "./03-advanced";
import D4 from "./04-custom-datasource";
import D5 from "./05-custom-actions";
import D6 from "./06-pagination";
import D7 from "./07-table-transfer";
import D8 from "./08-tree-transfer";
import D9 from "./09-status";
import D10 from "./10-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "One Way": D1,
  "Search": D2,
  "Advanced": D3,
  "Custom datasource": D4,
  "Custom Actions": D5,
  "Pagination": D6,
  "Table Transfer": D7,
  "Tree Transfer": D8,
  "Status": D9,
  "Custom semantic dom styling": D10,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
