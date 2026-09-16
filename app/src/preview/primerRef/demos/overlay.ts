// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Overlay/Overlay.stories__Default";
import * as m1 from "./_src/src/Overlay/Overlay.features.stories__DialogOverlay";
import * as m2 from "./_src/src/Overlay/Overlay.features.stories__PositionedOverlays";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "DialogOverlay": composeStory(m1.default, m1["DialogOverlay"], "DialogOverlay"),
  "PositionedOverlays": composeStory(m2.default, m2["PositionedOverlays"], "PositionedOverlays"),
};
export const skipped = {
};
