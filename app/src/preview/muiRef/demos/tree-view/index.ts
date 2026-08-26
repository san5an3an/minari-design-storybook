/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-simple-tree-view";
import D1 from "./01-basic-rich-tree-view";

export const DEMOS: DemoSet = {
  "BasicSimpleTreeView": D0,
  "BasicRichTreeView": D1,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "BasicRichTreeViewPro": "이 예제는 우리가 안 가진 패키지(@mui/x-tree-view-pro/RichTreeViewPro)를 불러요.",
};
