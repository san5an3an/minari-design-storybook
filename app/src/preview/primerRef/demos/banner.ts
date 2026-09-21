// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m1 from "./_src/src/Banner/Banner.features.stories__Critical";
import * as m8 from "./_src/src/Banner/Banner.features.stories__WithHiddenTitle";
import * as m9 from "./_src/src/Banner/Banner.features.stories__WithHiddenTitleAndActions";
import * as m12 from "./_src/src/Banner/Banner.features.stories__WithActions";
import * as u0 from "./_src/src/Banner/Banner.stories__Default";
import * as u1 from "./_src/src/Banner/Banner.features.stories__Info";
import * as u2 from "./_src/src/Banner/Banner.features.stories__Success";
import * as u3 from "./_src/src/Banner/Banner.features.stories__Upsell";
import * as u4 from "./_src/src/Banner/Banner.features.stories__Warning";
import * as u5 from "./_src/src/Banner/Banner.features.stories__Dismiss";
import * as u6 from "./_src/src/Banner/Banner.features.stories__DismissWithActions";
import * as u7 from "./_src/src/Banner/Banner.features.stories__DismissibleWithHiddenTitleAndActions";
import * as u8 from "./_src/src/Banner/Banner.features.stories__DismissibleWithHiddenTitleAndSecondaryAction";
import * as u9 from "./_src/src/Banner/Banner.features.stories__CustomIcon";
export const demos = {
  "Default": composeStory(u0.default, u0["Default"], "Default"),
  "Info": composeStory(u1.default, u1["Info"], "Info"),
  "Success": composeStory(u2.default, u2["Success"], "Success"),
  "Upsell": composeStory(u3.default, u3["Upsell"], "Upsell"),
  "Warning": composeStory(u4.default, u4["Warning"], "Warning"),
  "Dismiss": composeStory(u5.default, u5["Dismiss"], "Dismiss"),
  "DismissWithActions": composeStory(u6.default, u6["DismissWithActions"], "DismissWithActions"),
  "DismissibleWithHiddenTitleAndActions": composeStory(u7.default, u7["DismissibleWithHiddenTitleAndActions"], "DismissibleWithHiddenTitleAndActions"),
  "DismissibleWithHiddenTitleAndSecondaryAction": composeStory(u8.default, u8["DismissibleWithHiddenTitleAndSecondaryAction"], "DismissibleWithHiddenTitleAndSecondaryAction"),
  "CustomIcon": composeStory(u9.default, u9["CustomIcon"], "CustomIcon"),
  "Critical": composeStory(m1.default, m1["Critical"], "Critical"),
  "WithHiddenTitle": composeStory(m8.default, m8["WithHiddenTitle"], "WithHiddenTitle"),
  "WithHiddenTitleAndActions": composeStory(m9.default, m9["WithHiddenTitleAndActions"], "WithHiddenTitleAndActions"),
  "WithActions": composeStory(m12.default, m12["WithActions"], "WithActions"),
};
export const skipped = {
  "WithAnnouncement": {"code":"package-missing","detail":"storybook/actions"},
};
