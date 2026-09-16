// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Heading/Heading.stories__Default";
import * as m1 from "./_src/src/Heading/Heading.features.stories__Small";
import * as m2 from "./_src/src/Heading/Heading.features.stories__Medium";
import * as m3 from "./_src/src/Heading/Heading.features.stories__Large";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Small": composeStory(m1.default, m1["Small"], "Small"),
  "Medium": composeStory(m2.default, m2["Medium"], "Medium"),
  "Large": composeStory(m3.default, m3["Large"], "Large"),
};
export const skipped = {
};
