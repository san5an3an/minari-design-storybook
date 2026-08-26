/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-type";
import D2 from "./02-autoset-font-size";
import D3 from "./03-with-badge";
import D4 from "./04-avatar-group";
import D5 from "./06-responsive-size";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Type": D1,
  "Autoset Font Size": D2,
  "With Badge": D3,
  "Avatar.Group": D4,
  "Responsive Size": D5,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "maxCount includes overflow": "이 예제는 우리가 안 가진 패키지(../AvatarGroup)를 불러요.",
};
