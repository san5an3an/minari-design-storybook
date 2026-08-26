/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-breadcrumbs";
import D1 from "./01-active-last-breadcrumb";
import D2 from "./02-custom-separator";
import D3 from "./03-icon-breadcrumbs";
import D4 from "./04-collapsed-breadcrumbs";
import D5 from "./05-condensed-with-menu";
import D6 from "./06-customized-breadcrumbs";

export const DEMOS: DemoSet = {
  "BasicBreadcrumbs": D0,
  "ActiveLastBreadcrumb": D1,
  "CustomSeparator": D2,
  "IconBreadcrumbs": D3,
  "CollapsedBreadcrumbs": D4,
  "CondensedWithMenu": D5,
  "CustomizedBreadcrumbs": D6,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "RouterBreadcrumbs": "이 예제는 우리가 안 가진 패키지(react-router)를 불러요.",
};
