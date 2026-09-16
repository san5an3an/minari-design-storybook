// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Checkbox/Checkbox.stories__Default";
import * as m1 from "./_src/src/Checkbox/Checkbox.features.stories__WithLeadingVisual";
import * as m2 from "./_src/src/Checkbox/Checkbox.features.stories__Disabled";
import * as m3 from "./_src/src/Checkbox/Checkbox.features.stories__WithCaption";
import * as m4 from "./_src/src/Checkbox/Checkbox.features.stories__Indeterminate";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithLeadingVisual": composeStory(m1.default, m1["WithLeadingVisual"], "WithLeadingVisual"),
  "Disabled": composeStory(m2.default, m2["Disabled"], "Disabled"),
  "WithCaption": composeStory(m3.default, m3["WithCaption"], "WithCaption"),
  "Indeterminate": composeStory(m4.default, m4["Indeterminate"], "Indeterminate"),
};
export const skipped = {
};
