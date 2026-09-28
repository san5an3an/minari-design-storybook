// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/ButtonGroup/ButtonGroup.stories__Default";
import * as m1 from "./_src/src/ButtonGroup/ButtonGroup.features.stories__IconButtons";
import * as m2 from "./_src/src/ButtonGroup/ButtonGroup.features.stories__LoadingButtons";
import * as m3 from "./_src/src/ButtonGroup/ButtonGroup.features.stories__DropdownSplit";
import * as m4 from "./_src/src/ButtonGroup/ButtonGroup.features.stories__AsToolbar";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "IconButtons": composeStory(m1.default, m1["IconButtons"], "IconButtons"),
  "LoadingButtons": composeStory(m2.default, m2["LoadingButtons"], "LoadingButtons"),
  "DropdownSplit": composeStory(m3.default, m3["DropdownSplit"], "DropdownSplit"),
  "AsToolbar": composeStory(m4.default, m4["AsToolbar"], "AsToolbar"),
};
export const skipped = {
};
