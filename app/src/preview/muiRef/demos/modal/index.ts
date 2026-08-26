/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-modal";
import D1 from "./01-nested-modal";
import D2 from "./02-transitions-modal";
import D3 from "./04-keep-mounted-modal";
import D4 from "./05-server-modal";

export const DEMOS: DemoSet = {
  "BasicModal": D0,
  "NestedModal": D1,
  "TransitionsModal": D2,
  "KeepMountedModal": D3,
  "ServerModal": D4,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "SpringModal": "이 예제는 우리가 안 가진 패키지(@react-spring/web)를 불러요.",
};
