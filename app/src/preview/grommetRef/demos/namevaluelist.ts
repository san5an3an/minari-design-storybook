// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/NameValueList/stories/Align.stories.js";
import * as m1 from "./_src/src/js/components/NameValueList/stories/CustomName.stories.js";
import * as m2 from "./_src/src/js/components/NameValueList/stories/CustomValue.stories.js";
import * as m3 from "./_src/src/js/components/NameValueList/stories/Layout.stories.js";
import * as m4 from "./_src/src/js/components/NameValueList/stories/PairProps.stories.js";
import * as m5 from "./_src/src/js/components/NameValueList/stories/Simple.stories.js";
import * as m6 from "./_src/src/js/components/NameValueList/stories/Width.stories.js";
export const demos = {
  "Align": composeStory(m0.default, m0["Align"], "Align"),
  "CustomName": composeStory(m1.default, m1["CustomName"], "CustomName"),
  "CustomValue": composeStory(m2.default, m2["CustomValue"], "CustomValue"),
  "Layout": composeStory(m3.default, m3["Layout"], "Layout"),
  "PairProps": composeStory(m4.default, m4["PairProps"], "PairProps"),
  "Simple": composeStory(m5.default, m5["Simple"], "Simple"),
  "Width": composeStory(m6.default, m6["Width"], "Width"),
};
export const skipped = {
  "Themed": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
