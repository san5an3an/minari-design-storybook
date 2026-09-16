// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Spinner/Spinner.stories__Default";
import * as m1 from "./_src/src/Spinner/Spinner.features.stories__Small";
import * as m2 from "./_src/src/Spinner/Spinner.features.stories__Large";
import * as m3 from "./_src/src/Spinner/Spinner.features.stories__SuppressScreenReaderText";
import * as m4 from "./_src/src/Spinner/Spinner.features.stories__WithDelay";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Small": composeStory(m1.default, m1["Small"], "Small"),
  "Large": composeStory(m2.default, m2["Large"], "Large"),
  "SuppressScreenReaderText": composeStory(m3.default, m3["SuppressScreenReaderText"], "SuppressScreenReaderText"),
  "WithDelay": composeStory(m4.default, m4["WithDelay"], "WithDelay"),
};
export const skipped = {
};
