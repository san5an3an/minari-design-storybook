// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Radio/Radio.stories__Default";
import * as m1 from "./_src/src/Radio/Radio.features.stories__WithLeadingVisual";
import * as m2 from "./_src/src/Radio/Radio.features.stories__Disabled";
import * as m3 from "./_src/src/Radio/Radio.features.stories__WithCaption";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithLeadingVisual": composeStory(m1.default, m1["WithLeadingVisual"], "WithLeadingVisual"),
  "Disabled": composeStory(m2.default, m2["Disabled"], "Disabled"),
  "WithCaption": composeStory(m3.default, m3["WithCaption"], "WithCaption"),
};
export const skipped = {
};
