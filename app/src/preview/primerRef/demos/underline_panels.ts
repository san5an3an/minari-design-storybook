// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/experimental/UnderlinePanels/UnderlinePanels.stories__Default";
import * as m1 from "./_src/src/experimental/UnderlinePanels/UnderlinePanels.features.stories__LabelledByExternalElement";
import * as m2 from "./_src/src/experimental/UnderlinePanels/UnderlinePanels.features.stories__SelectedTab";
import * as m3 from "./_src/src/experimental/UnderlinePanels/UnderlinePanels.features.stories__WithCounters";
import * as m4 from "./_src/src/experimental/UnderlinePanels/UnderlinePanels.features.stories__WithCountersInLoadingState";
import * as m5 from "./_src/src/experimental/UnderlinePanels/UnderlinePanels.features.stories__WithIcons";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "LabelledByExternalElement": composeStory(m1.default, m1["LabelledByExternalElement"], "LabelledByExternalElement"),
  "SelectedTab": composeStory(m2.default, m2["SelectedTab"], "SelectedTab"),
  "WithCounters": composeStory(m3.default, m3["WithCounters"], "WithCounters"),
  "WithCountersInLoadingState": composeStory(m4.default, m4["WithCountersInLoadingState"], "WithCountersInLoadingState"),
  "WithIcons": composeStory(m5.default, m5["WithIcons"], "WithIcons"),
};
export const skipped = {
  "WithIconsHiddenOnNarrowScreen": {"code":"package-missing","detail":"storybook/viewport"},
  "Controlled": {"code":"package-missing","detail":"storybook/actions"},
  "Uncontrolled": {"code":"package-missing","detail":"storybook/actions"},
  "ManualActivation": {"code":"package-missing","detail":"storybook/actions"},
  "InOverlay": {"code":"package-missing","detail":"storybook/actions"},
};
