// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m1 from "./_src/src/Banner/Banner.features.stories__Critical";
import * as m8 from "./_src/src/Banner/Banner.features.stories__WithHiddenTitle";
import * as m9 from "./_src/src/Banner/Banner.features.stories__WithHiddenTitleAndActions";
import * as m12 from "./_src/src/Banner/Banner.features.stories__WithActions";
export const demos = {
  "Critical": composeStory(m1.default, m1["Critical"], "Critical"),
  "WithHiddenTitle": composeStory(m8.default, m8["WithHiddenTitle"], "WithHiddenTitle"),
  "WithHiddenTitleAndActions": composeStory(m9.default, m9["WithHiddenTitleAndActions"], "WithHiddenTitleAndActions"),
  "WithActions": composeStory(m12.default, m12["WithActions"], "WithActions"),
};
export const skipped = {
  "Default": {"code":"package-missing","detail":"storybook/actions"},
  "Info": {"code":"package-missing","detail":"storybook/actions"},
  "Success": {"code":"package-missing","detail":"storybook/actions"},
  "Upsell": {"code":"package-missing","detail":"storybook/actions"},
  "Warning": {"code":"package-missing","detail":"storybook/actions"},
  "Dismiss": {"code":"package-missing","detail":"storybook/actions"},
  "DismissWithActions": {"code":"package-missing","detail":"storybook/actions"},
  "DismissibleWithHiddenTitleAndActions": {"code":"package-missing","detail":"storybook/actions"},
  "DismissibleWithHiddenTitleAndSecondaryAction": {"code":"package-missing","detail":"storybook/actions"},
  "CustomIcon": {"code":"package-missing","detail":"storybook/actions"},
  "WithAnnouncement": {"code":"package-missing","detail":"storybook/actions"},
};
