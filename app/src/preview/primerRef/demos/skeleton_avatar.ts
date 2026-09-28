// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/SkeletonAvatar/SkeletonAvatar.stories__Default";
import * as m1 from "./_src/src/SkeletonAvatar/SkeletonAvatar.features.stories__Square";
import * as m2 from "./_src/src/SkeletonAvatar/SkeletonAvatar.features.stories__Size";
import * as m3 from "./_src/src/SkeletonAvatar/SkeletonAvatar.features.stories__SizeResponsive";
import * as m4 from "./_src/src/SkeletonAvatar/SkeletonAvatar.features.stories__InAStack";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Square": composeStory(m1.default, m1["Square"], "Square"),
  "Size": composeStory(m2.default, m2["Size"], "Size"),
  "SizeResponsive": composeStory(m3.default, m3["SizeResponsive"], "SizeResponsive"),
  "InAStack": composeStory(m4.default, m4["InAStack"], "InAStack"),
};
export const skipped = {
};
