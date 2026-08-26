/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-data-grid-demo";
import D1 from "./03-render-component";

export const DEMOS: DemoSet = {
  "DataGridDemo": D0,
  "RenderComponent": D1,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "DataGridProDemo": "이 예제는 우리가 안 가진 패키지(@mui/x-data-grid-pro)를 불러요.",
  "DataGridPremiumDemo": "이 예제는 우리가 안 가진 패키지(@mui/x-data-grid-premium)를 불러요.",
};
