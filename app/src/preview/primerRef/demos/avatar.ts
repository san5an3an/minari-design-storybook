// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Avatar/Avatar.stories__Default";
import * as m1 from "./_src/src/Avatar/Avatar.features.stories__Square";
import * as m2 from "./_src/src/Avatar/Avatar.features.stories__Size";
import * as m3 from "./_src/src/Avatar/Avatar.features.stories__SizeResponsive";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Square": composeStory(m1.default, m1["Square"], "Square"),
  "Size": composeStory(m2.default, m2["Size"], "Size"),
  "SizeResponsive": composeStory(m3.default, m3["SizeResponsive"], "SizeResponsive"),
};
export const skipped = {
};
