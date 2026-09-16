// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Truncate/Truncate.stories__Default";
import * as m1 from "./_src/src/Truncate/Truncate.features.stories__Expandable";
import * as m2 from "./_src/src/Truncate/Truncate.features.stories__Inline";
import * as m3 from "./_src/src/Truncate/Truncate.features.stories__MaxWidth";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Expandable": composeStory(m1.default, m1["Expandable"], "Expandable"),
  "Inline": composeStory(m2.default, m2["Inline"], "Inline"),
  "MaxWidth": composeStory(m3.default, m3["MaxWidth"], "MaxWidth"),
};
export const skipped = {
};
