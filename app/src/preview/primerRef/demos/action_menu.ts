// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/ActionMenu/ActionMenu.stories__Default";
import * as m1 from "./_src/src/ActionMenu/ActionMenu.features.stories__LinksAndActions";
import * as m2 from "./_src/src/ActionMenu/ActionMenu.features.stories__SingleSelect";
import * as m3 from "./_src/src/ActionMenu/ActionMenu.features.stories__MultiSelect";
import * as m4 from "./_src/src/ActionMenu/ActionMenu.features.stories__InactiveItems";
import * as m5 from "./_src/src/ActionMenu/ActionMenu.features.stories__LoadingItems";
import * as m6 from "./_src/src/ActionMenu/ActionMenu.features.stories__Submenus";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "LinksAndActions": composeStory(m1.default, m1["LinksAndActions"], "LinksAndActions"),
  "SingleSelect": composeStory(m2.default, m2["SingleSelect"], "SingleSelect"),
  "MultiSelect": composeStory(m3.default, m3["MultiSelect"], "MultiSelect"),
  "InactiveItems": composeStory(m4.default, m4["InactiveItems"], "InactiveItems"),
  "LoadingItems": composeStory(m5.default, m5["LoadingItems"], "LoadingItems"),
  "Submenus": composeStory(m6.default, m6["Submenus"], "Submenus"),
};
export const skipped = {
};
