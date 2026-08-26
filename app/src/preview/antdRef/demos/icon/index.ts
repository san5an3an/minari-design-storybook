/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-two-tone-icon-and-colorful-icon";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Two-tone icon and colorful icon": D1,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Custom Icon": "이 예제는 **직접 그린 SVG** 를 아이콘으로 씁니다 (antd 의 `Icon` 공장). 이 프로젝트는 Lucide 밖의 아이콘을 화면에 올리지 않아요.",
  "Use iconfont.cn": "이 예제는 `createFromIconfontCN` 으로 **바깥 아이콘 폰트**를 받아 와요. 이 프로젝트는 Lucide 밖의 아이콘을 화면에 올리지 않아요.",
  "Multiple resources from iconfont.cn": "이 예제는 `createFromIconfontCN` 으로 **바깥 아이콘 폰트**를 받아 와요. 이 프로젝트는 Lucide 밖의 아이콘을 화면에 올리지 않아요.",
};
