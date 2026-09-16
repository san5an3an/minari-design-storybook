// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Link/Link.stories__Default";
import * as m1 from "./_src/src/Link/Link.features.stories__Muted";
import * as m2 from "./_src/src/Link/Link.features.stories__Inline";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Muted": composeStory(m1.default, m1["Muted"], "Muted"),
  "Inline": composeStory(m2.default, m2["Inline"], "Inline"),
};
export const skipped = {
};
