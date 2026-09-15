// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Calendar/stories/SundayFirstDay.stories.js";
import * as m1 from "./_src/src/js/components/Calendar/stories/ActiveDate.stories.js";
import * as m2 from "./_src/src/js/components/Calendar/stories/CustomDay.stories.js";
import * as m3 from "./_src/src/js/components/Calendar/stories/DaylightSavings.stories.js";
import * as m4 from "./_src/src/js/components/Calendar/stories/Dual.stories.js";
import * as m5 from "./_src/src/js/components/Calendar/stories/Fill.stories.js";
import * as m6 from "./_src/src/js/components/Calendar/stories/CustomHeader.stories.js";
import * as m7 from "./_src/src/js/components/Calendar/stories/HeaderLevel.stories.js";
import * as m8 from "./_src/src/js/components/Calendar/stories/Multiple.stories.js";
import * as m9 from "./_src/src/js/components/Calendar/stories/Range.stories.js";
import * as m10 from "./_src/src/js/components/Calendar/stories/ShowAdjacentDays.stories.js";
import * as m11 from "./_src/src/js/components/Calendar/stories/Simple.stories.js";
export const demos = {
  "SundayFirstDayCalendar": composeStory(m0.default, m0["SundayFirstDayCalendar"], "SundayFirstDayCalendar"),
  "ActiveDate": composeStory(m1.default, m1["ActiveDate"], "ActiveDate"),
  "CustomDayCalendar": composeStory(m2.default, m2["CustomDayCalendar"], "CustomDayCalendar"),
  "DSTCalendar": composeStory(m3.default, m3["DSTCalendar"], "DSTCalendar"),
  "Dual": composeStory(m4.default, m4["Dual"], "Dual"),
  "Fill": composeStory(m5.default, m5["Fill"], "Fill"),
  "CustomHeaderCalendar": composeStory(m6.default, m6["CustomHeaderCalendar"], "CustomHeaderCalendar"),
  "HeaderLevel": composeStory(m7.default, m7["HeaderLevel"], "HeaderLevel"),
  "Multiple": composeStory(m8.default, m8["Multiple"], "Multiple"),
  "Range": composeStory(m9.default, m9["Range"], "Range"),
  "ShowAdjacent": composeStory(m10.default, m10["ShowAdjacent"], "ShowAdjacent"),
  "Simple": composeStory(m11.default, m11["Simple"], "Simple"),
};
export const skipped = {
  "CustomDateCalendar": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "CustomSizeCalendar": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
