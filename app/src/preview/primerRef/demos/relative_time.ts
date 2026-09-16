// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/RelativeTime/RelativeTime.stories__Default";
import * as m1 from "./_src/src/RelativeTime/RelativeTime.features.stories__MicroFormat";
import * as m2 from "./_src/src/RelativeTime/RelativeTime.features.stories__RecentTime";
import * as m3 from "./_src/src/RelativeTime/RelativeTime.features.stories__CountDownTimer";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "MicroFormat": composeStory(m1.default, m1["MicroFormat"], "MicroFormat"),
  "RecentTime": composeStory(m2.default, m2["RecentTime"], "RecentTime"),
  "CountDownTimer": composeStory(m3.default, m3["CountDownTimer"], "CountDownTimer"),
};
export const skipped = {
};
