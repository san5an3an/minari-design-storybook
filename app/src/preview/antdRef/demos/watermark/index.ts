/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-multi-line-watermark";
import D2 from "./02-image-watermark";
import D3 from "./03-custom-configuration";
import D4 from "./04-modal-or-drawer";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Multi-line watermark": D1,
  "Image watermark": D2,
  "Custom configuration": D3,
  "Modal or Drawer": D4,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
