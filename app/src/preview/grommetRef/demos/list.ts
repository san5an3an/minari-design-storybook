// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/List/stories/Action.stories.js";
import * as m1 from "./_src/src/js/components/List/stories/Basic.stories.js";
import * as m2 from "./_src/src/js/components/List/stories/Children.stories.js";
import * as m3 from "./_src/src/js/components/List/stories/Disabled.stories.js";
import * as m4 from "./_src/src/js/components/List/stories/RenderedList.stories.js";
import * as m5 from "./_src/src/js/components/List/stories/onClickItem.stories.js";
import * as m6 from "./_src/src/js/components/List/stories/Order.stories.js";
import * as m7 from "./_src/src/js/components/List/stories/Paginated.stories.js";
import * as m8 from "./_src/src/js/components/List/stories/Pinned.stories.js";
import * as m9 from "./_src/src/js/components/List/stories/secondaryKey.stories.js";
import * as m10 from "./_src/src/js/components/List/stories/Selection.stories.js";
import * as m11 from "./_src/src/js/components/List/stories/Show.stories.js";
export const demos = {
  "Action": composeStory(m0.default, m0["Action"], "Action"),
  "Basic": composeStory(m1.default, m1["Basic"], "Basic"),
  "Children": composeStory(m2.default, m2["Children"], "Children"),
  "Disabled": composeStory(m3.default, m3["Disabled"], "Disabled"),
  "RenderedList": composeStory(m4.default, m4["RenderedList"], "RenderedList"),
  "OnClickItemList": composeStory(m5.default, m5["OnClickItemList"], "OnClickItemList"),
  "Order": composeStory(m6.default, m6["Order"], "Order"),
  "Paginated": composeStory(m7.default, m7["Paginated"], "Paginated"),
  "Pinned": composeStory(m8.default, m8["Pinned"], "Pinned"),
  "SecondaryKey": composeStory(m9.default, m9["SecondaryKey"], "SecondaryKey"),
  "Selection": composeStory(m10.default, m10["Selection"], "Selection"),
  "Show": composeStory(m11.default, m11["Show"], "Show"),
};
export const skipped = {
  "ThemedList": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
