// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/CounterLabel/CounterLabel.stories__Default";
import * as m1 from "./_src/src/CounterLabel/CounterLabel.features.stories__PrimaryTheme";
import * as m2 from "./_src/src/CounterLabel/CounterLabel.features.stories__SecondaryTheme";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "PrimaryTheme": composeStory(m1.default, m1["PrimaryTheme"], "PrimaryTheme"),
  "SecondaryTheme": composeStory(m2.default, m2["SecondaryTheme"], "SecondaryTheme"),
};
export const skipped = {
};
