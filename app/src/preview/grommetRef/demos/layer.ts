// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Layer/stories/ScrollBody.stories.js";
import * as m1 from "./_src/src/js/components/Layer/stories/Form.stories.js";
import * as m2 from "./_src/src/js/components/Layer/stories/Full.stories.js";
import * as m3 from "./_src/src/js/components/Layer/stories/Notification.stories.js";
import * as m4 from "./_src/src/js/components/Layer/stories/Plain.stories.js";
import * as m5 from "./_src/src/js/components/Layer/stories/RTL.stories.js";
import * as m6 from "./_src/src/js/components/Layer/stories/Target.stories.js";
import * as m7 from "./_src/src/js/components/Layer/stories/Center.stories.js";
import * as m8 from "./_src/src/js/components/Layer/stories/Corner.stories.js";
export const demos = {
  "ScrollBodyLayer": composeStory(m0.default, m0["ScrollBodyLayer"], "ScrollBodyLayer"),
  "FormLayer": composeStory(m1.default, m1["FormLayer"], "FormLayer"),
  "FullLayer": composeStory(m2.default, m2["FullLayer"], "FullLayer"),
  "NotificationLayer": composeStory(m3.default, m3["NotificationLayer"], "NotificationLayer"),
  "PlainLayer": composeStory(m4.default, m4["PlainLayer"], "PlainLayer"),
  "RTLLayer": composeStory(m5.default, m5["RTLLayer"], "RTLLayer"),
  "TargetLayer": composeStory(m6.default, m6["TargetLayer"], "TargetLayer"),
  "CenterLayer": composeStory(m7.default, m7["CenterLayer"], "CenterLayer"),
  "CornerLayer": composeStory(m8.default, m8["CornerLayer"], "CornerLayer"),
};
export const skipped = {
  "RoundLayer": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
