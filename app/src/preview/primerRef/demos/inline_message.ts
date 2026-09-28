// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/InlineMessage/InlineMessage.stories__Default";
import * as m1 from "./_src/src/InlineMessage/InlineMessage.features.stories__Critical";
import * as m2 from "./_src/src/InlineMessage/InlineMessage.features.stories__Success";
import * as m3 from "./_src/src/InlineMessage/InlineMessage.features.stories__Unavailable";
import * as m4 from "./_src/src/InlineMessage/InlineMessage.features.stories__Warning";
import * as m5 from "./_src/src/InlineMessage/InlineMessage.features.stories__Multiline";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Critical": composeStory(m1.default, m1["Critical"], "Critical"),
  "Success": composeStory(m2.default, m2["Success"], "Success"),
  "Unavailable": composeStory(m3.default, m3["Unavailable"], "Unavailable"),
  "Warning": composeStory(m4.default, m4["Warning"], "Warning"),
  "Multiline": composeStory(m5.default, m5["Multiline"], "Multiline"),
};
export const skipped = {
};
