// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/BranchName/BranchName.stories__Default";
import * as m1 from "./_src/src/BranchName/BranchName.features.stories__WithBranchIcon";
import * as m2 from "./_src/src/BranchName/BranchName.features.stories__NotALink";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithBranchIcon": composeStory(m1.default, m1["WithBranchIcon"], "WithBranchIcon"),
  "NotALink": composeStory(m2.default, m2["NotALink"], "NotALink"),
};
export const skipped = {
};
