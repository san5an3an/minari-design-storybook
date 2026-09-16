// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Card/Card.stories__Default";
import * as m1 from "./_src/src/Card/Card.features.stories__WithImage";
import * as m2 from "./_src/src/Card/Card.features.stories__WithMetadata";
import * as m3 from "./_src/src/Card/Card.features.stories__WithMenu";
import * as m4 from "./_src/src/Card/Card.features.stories__StandaloneSection";
import * as m5 from "./_src/src/Card/Card.features.stories__InList";
import * as m6 from "./_src/src/Card/Card.features.stories__InteractiveContent";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithImage": composeStory(m1.default, m1["WithImage"], "WithImage"),
  "WithMetadata": composeStory(m2.default, m2["WithMetadata"], "WithMetadata"),
  "WithMenu": composeStory(m3.default, m3["WithMenu"], "WithMenu"),
  "StandaloneSection": composeStory(m4.default, m4["StandaloneSection"], "StandaloneSection"),
  "InList": composeStory(m5.default, m5["InList"], "InList"),
  "InteractiveContent": composeStory(m6.default, m6["InteractiveContent"], "InteractiveContent"),
};
export const skipped = {
};
