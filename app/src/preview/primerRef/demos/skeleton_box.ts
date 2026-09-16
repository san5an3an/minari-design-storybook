// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Skeleton/SkeletonBox.stories__Default";
import * as m1 from "./_src/src/Skeleton/SkeletonBox.features.stories__CustomHeight";
import * as m2 from "./_src/src/Skeleton/SkeletonBox.features.stories__CustomWidth";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "CustomHeight": composeStory(m1.default, m1["CustomHeight"], "CustomHeight"),
  "CustomWidth": composeStory(m2.default, m2["CustomWidth"], "CustomWidth"),
};
export const skipped = {
};
