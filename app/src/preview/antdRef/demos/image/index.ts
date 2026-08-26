/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-progressive-loading";
import D2 from "./02-fault-tolerant";
import D3 from "./03-multiple-image-preview";
import D4 from "./04-preview-from-one-image";
import D5 from "./05-custom-preview-image";
import D6 from "./06-controlled-preview";
import D7 from "./07-custom-toolbar-render";
import D8 from "./08-custom-preview-render";
import D9 from "./09-preview-mask";
import D10 from "./10-custom-semantic-dom-styling";
import D11 from "./11-nested";

export const DEMOS: DemoSet = {
  "Basic Usage": D0,
  "Progressive Loading": D1,
  "Fault tolerant": D2,
  "Multiple image preview": D3,
  "Preview from one image": D4,
  "Custom preview image": D5,
  "Controlled Preview": D6,
  "Custom toolbar render": D7,
  "Custom preview render": D8,
  "preview mask": D9,
  "Custom semantic dom styling": D10,
  "nested": D11,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
