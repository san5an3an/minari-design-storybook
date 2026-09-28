// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Box/stories/Animation.stories.js";
import * as m1 from "./_src/src/js/components/Box/stories/Background.stories.js";
import * as m2 from "./_src/src/js/components/Box/stories/Border.stories.js";
import * as m3 from "./_src/src/js/components/Box/stories/Elevation.stories.js";
import * as m4 from "./_src/src/js/components/Box/stories/Fixed.stories.js";
import * as m5 from "./_src/src/js/components/Box/stories/Custom.stories.js";
import * as m6 from "./_src/src/js/components/Box/stories/MinMax.stories.js";
import * as m7 from "./_src/src/js/components/Box/stories/OnClick.stories.js";
import * as m8 from "./_src/src/js/components/Box/stories/ResponsiveContainer.stories.js";
import * as m9 from "./_src/src/js/components/Box/stories/Round.stories.js";
import * as m10 from "./_src/src/js/components/Box/stories/RTL.stories.js";
import * as m11 from "./_src/src/js/components/Box/stories/Simple.stories.js";
export const demos = {
  "Animation": composeStory(m0.default, m0["Animation"], "Animation"),
  "Background": composeStory(m1.default, m1["Background"], "Background"),
  "BorderBox": composeStory(m2.default, m2["BorderBox"], "BorderBox"),
  "ElevationBox": composeStory(m3.default, m3["ElevationBox"], "ElevationBox"),
  "FixedSizesBox": composeStory(m4.default, m4["FixedSizesBox"], "FixedSizesBox"),
  "GradientColorBox": composeStory(m5.default, m5["GradientColorBox"], "GradientColorBox"),
  "MinMaxSizesBox": composeStory(m6.default, m6["MinMaxSizesBox"], "MinMaxSizesBox"),
  "OnClickBox": composeStory(m7.default, m7["OnClickBox"], "OnClickBox"),
  "ResponsiveContainer": composeStory(m8.default, m8["ResponsiveContainer"], "ResponsiveContainer"),
  "RoundBox": composeStory(m9.default, m9["RoundBox"], "RoundBox"),
  "RTLBox": composeStory(m10.default, m10["RTLBox"], "RTLBox"),
  "SimpleBox": composeStory(m11.default, m11["SimpleBox"], "SimpleBox"),
};
export const skipped = {
  "BackgroundThemed": {"code":"private-api","detail":"useThemeValue ← src/js/utils/useThemeValue.js · 공개 진입점 grommet 에 같은 선언 없음"},
  "ThemedBackgrounds": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
