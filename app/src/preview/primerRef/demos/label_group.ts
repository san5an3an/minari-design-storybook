// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/LabelGroup/LabelGroup.stories__Default";
import * as m1 from "./_src/src/LabelGroup/LabelGroup.features.stories__TruncateAuto";
import * as m2 from "./_src/src/LabelGroup/LabelGroup.features.stories__TruncateAutoWithInteractiveTokens";
import * as m3 from "./_src/src/LabelGroup/LabelGroup.features.stories__TruncateAfterFive";
import * as m4 from "./_src/src/LabelGroup/LabelGroup.features.stories__TruncateAutoExpandInline";
import * as m5 from "./_src/src/LabelGroup/LabelGroup.features.stories__TruncateAutoExpandInlineWithInteractiveTokens";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "TruncateAuto": composeStory(m1.default, m1["TruncateAuto"], "TruncateAuto"),
  "TruncateAutoWithInteractiveTokens": composeStory(m2.default, m2["TruncateAutoWithInteractiveTokens"], "TruncateAutoWithInteractiveTokens"),
  "TruncateAfterFive": composeStory(m3.default, m3["TruncateAfterFive"], "TruncateAfterFive"),
  "TruncateAutoExpandInline": composeStory(m4.default, m4["TruncateAutoExpandInline"], "TruncateAutoExpandInline"),
  "TruncateAutoExpandInlineWithInteractiveTokens": composeStory(m5.default, m5["TruncateAutoExpandInlineWithInteractiveTokens"], "TruncateAutoExpandInlineWithInteractiveTokens"),
};
export const skipped = {
};
