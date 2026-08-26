/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-pagination";
import D1 from "./01-pagination-outlined";
import D2 from "./02-pagination-rounded";
import D3 from "./03-pagination-size";
import D4 from "./04-pagination-buttons";
import D5 from "./05-custom-icons";
import D6 from "./06-pagination-ranges";
import D7 from "./07-pagination-controlled";
import D8 from "./09-use-pagination";
import D9 from "./10-table-pagination-demo";

export const DEMOS: DemoSet = {
  "BasicPagination": D0,
  "PaginationOutlined": D1,
  "PaginationRounded": D2,
  "PaginationSize": D3,
  "PaginationButtons": D4,
  "CustomIcons": D5,
  "PaginationRanges": D6,
  "PaginationControlled": D7,
  "UsePagination": D8,
  "TablePaginationDemo": D9,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "PaginationLink": "이 예제는 우리가 안 가진 패키지(react-router)를 불러요.",
};
