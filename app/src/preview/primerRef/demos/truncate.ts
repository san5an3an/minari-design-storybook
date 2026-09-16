// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Truncate/Truncate.stories__Default";
import * as m1 from "./_src/src/Truncate/Truncate.features.stories__Expandable";
import * as m2 from "./_src/src/Truncate/Truncate.features.stories__Inline";
import * as m3 from "./_src/src/Truncate/Truncate.features.stories__MaxWidth";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Expandable": composeStory(m1.default, m1["Expandable"], "Expandable"),
  "Inline": composeStory(m2.default, m2["Inline"], "Inline"),
  "MaxWidth": composeStory(m3.default, m3["MaxWidth"], "MaxWidth"),
};
export const skipped = {
};
