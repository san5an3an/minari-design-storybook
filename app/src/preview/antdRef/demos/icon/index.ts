/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-two-tone-icon-and-colorful-icon";
import D2 from "./02-custom-icon";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Two-tone icon and colorful icon": D1,
  "Custom Icon": D2,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Use iconfont.cn": "이 예제는 `createFromIconfontCN` 으로 **바깥 주소에서 아이콘 글꼴**을 받아 와요. 참조 화면이 바깥 서버에 매이면 안 돼서 이것만 안 세워요.",
  "Multiple resources from iconfont.cn": "이 예제는 `createFromIconfontCN` 으로 **바깥 주소에서 아이콘 글꼴**을 받아 와요. 참조 화면이 바깥 서버에 매이면 안 돼서 이것만 안 세워요.",
};
