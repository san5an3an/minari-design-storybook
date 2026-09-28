// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/TreeView/TreeView.stories__Default";
import * as m1 from "./_src/src/TreeView/TreeView.features.stories__Files";
import * as m2 from "./_src/src/TreeView/TreeView.features.stories__FilesChanged";
import * as m3 from "./_src/src/TreeView/TreeView.features.stories__AsyncSuccess";
import * as m4 from "./_src/src/TreeView/TreeView.features.stories__AsyncError";
import * as m5 from "./_src/src/TreeView/TreeView.features.stories__AsyncWithCount";
import * as m6 from "./_src/src/TreeView/TreeView.features.stories__Controlled";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Files": composeStory(m1.default, m1["Files"], "Files"),
  "FilesChanged": composeStory(m2.default, m2["FilesChanged"], "FilesChanged"),
  "AsyncSuccess": composeStory(m3.default, m3["AsyncSuccess"], "AsyncSuccess"),
  "AsyncError": composeStory(m4.default, m4["AsyncError"], "AsyncError"),
  "AsyncWithCount": composeStory(m5.default, m5["AsyncWithCount"], "AsyncWithCount"),
  "Controlled": composeStory(m6.default, m6["Controlled"], "Controlled"),
};
export const skipped = {
};
