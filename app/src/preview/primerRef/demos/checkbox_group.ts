// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/CheckboxGroup/CheckboxGroup.stories__Default";
import * as m1 from "./_src/src/CheckboxGroup/CheckboxGroup.features.stories__VisuallyHiddenLabel";
import * as m2 from "./_src/src/CheckboxGroup/CheckboxGroup.features.stories__WithExternalLabel";
import * as m3 from "./_src/src/CheckboxGroup/CheckboxGroup.features.stories__Error";
import * as m4 from "./_src/src/CheckboxGroup/CheckboxGroup.features.stories__Success";
import * as m5 from "./_src/src/CheckboxGroup/CheckboxGroup.features.stories__Caption";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "VisuallyHiddenLabel": composeStory(m1.default, m1["VisuallyHiddenLabel"], "VisuallyHiddenLabel"),
  "WithExternalLabel": composeStory(m2.default, m2["WithExternalLabel"], "WithExternalLabel"),
  "Error": composeStory(m3.default, m3["Error"], "Error"),
  "Success": composeStory(m4.default, m4["Success"], "Success"),
  "Caption": composeStory(m5.default, m5["Caption"], "Caption"),
};
export const skipped = {
};
