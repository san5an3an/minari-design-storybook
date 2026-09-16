// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/UnderlineNav/UnderlineNav.features.stories__Default";
import * as m1 from "./_src/src/UnderlineNav/UnderlineNav.features.stories__WithIcons";
import * as m2 from "./_src/src/UnderlineNav/UnderlineNav.features.stories__WithCounterLabels";
import * as m3 from "./_src/src/UnderlineNav/UnderlineNav.features.stories__OverflowTemplate";
import * as m5 from "./_src/src/UnderlineNav/UnderlineNav.features.stories__CountersLoadingState";
import * as m6 from "./_src/src/UnderlineNav/UnderlineNav.features.stories__VariantFlush";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithIcons": composeStory(m1.default, m1["WithIcons"], "WithIcons"),
  "WithCounterLabels": composeStory(m2.default, m2["WithCounterLabels"], "WithCounterLabels"),
  "OverflowTemplate": composeStory(m3.default, m3["OverflowTemplate"], "OverflowTemplate"),
  "CountersLoadingState": composeStory(m5.default, m5["CountersLoadingState"], "CountersLoadingState"),
  "VariantFlush": composeStory(m6.default, m6["VariantFlush"], "VariantFlush"),
};
export const skipped = {
  "OverflowOnNarrowScreen": {"code":"package-missing","detail":"storybook/viewport"},
};
