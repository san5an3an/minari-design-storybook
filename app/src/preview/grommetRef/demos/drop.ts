// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Drop/stories/AllNotStretched.stories.js";
import * as m1 from "./_src/src/js/components/Drop/stories/Inline.stories.js";
import * as m2 from "./_src/src/js/components/Drop/stories/Multiple.stories.js";
import * as m3 from "./_src/src/js/components/Drop/stories/Overflow.stories.js";
import * as m4 from "./_src/src/js/components/Drop/stories/Plain.stories.js";
import * as m5 from "./_src/src/js/components/Drop/stories/Progressive.stories.js";
import * as m6 from "./_src/src/js/components/Drop/stories/Simple.stories.js";
import * as m7 from "./_src/src/js/components/Drop/stories/Styled.stories.js";
import * as m8 from "./_src/src/js/components/Drop/stories/Meter.stories.js";
export const demos = {
  "AllNotStretched": composeStory(m0.default, m0["AllNotStretched"], "AllNotStretched"),
  "Inline": composeStory(m1.default, m1["Inline"], "Inline"),
  "Multiple": composeStory(m2.default, m2["Multiple"], "Multiple"),
  "Overflow": composeStory(m3.default, m3["Overflow"], "Overflow"),
  "Plain": composeStory(m4.default, m4["Plain"], "Plain"),
  "Progressive": composeStory(m5.default, m5["Progressive"], "Progressive"),
  "Simple": composeStory(m6.default, m6["Simple"], "Simple"),
  "Styled": composeStory(m7.default, m7["Styled"], "Styled"),
  "SVGChild": composeStory(m8.default, m8["SVGChild"], "SVGChild"),
};
export const skipped = {
  "Lazy": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "Themed": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
};
