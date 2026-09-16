// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Stack/Stack.stories__Default";
import * as m1 from "./_src/src/Stack/Stack.features.stories__GapScale";
import * as m2 from "./_src/src/Stack/Stack.features.stories__DirectionalPadding";
import * as m3 from "./_src/src/Stack/Stack.features.stories__PaddingScale";
import * as m4 from "./_src/src/Stack/Stack.features.stories__ShrinkingStackItems";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "GapScale": composeStory(m1.default, m1["GapScale"], "GapScale"),
  "DirectionalPadding": composeStory(m2.default, m2["DirectionalPadding"], "DirectionalPadding"),
  "PaddingScale": composeStory(m3.default, m3["PaddingScale"], "PaddingScale"),
  "ShrinkingStackItems": composeStory(m4.default, m4["ShrinkingStackItems"], "ShrinkingStackItems"),
};
export const skipped = {
};
