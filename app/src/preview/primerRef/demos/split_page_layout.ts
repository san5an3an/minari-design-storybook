// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/SplitPageLayout/SplitPageLayout.stories__Default";
import * as m1 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__SettingsPage";
import * as m2 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__WithSidebarStart";
import * as m3 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__WithSidebarEnd";
import * as m4 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__WithResizableSidebar";
import * as m5 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__WithSidebarAndResizablePane";
import * as m6 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__WithStickySidebar";
import * as m7 from "./_src/src/SplitPageLayout/SplitPageLayout.features.stories__SidebarFullscreenResponsiveVariant";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "SettingsPage": composeStory(m1.default, m1["SettingsPage"], "SettingsPage"),
  "WithSidebarStart": composeStory(m2.default, m2["WithSidebarStart"], "WithSidebarStart"),
  "WithSidebarEnd": composeStory(m3.default, m3["WithSidebarEnd"], "WithSidebarEnd"),
  "WithResizableSidebar": composeStory(m4.default, m4["WithResizableSidebar"], "WithResizableSidebar"),
  "WithSidebarAndResizablePane": composeStory(m5.default, m5["WithSidebarAndResizablePane"], "WithSidebarAndResizablePane"),
  "WithStickySidebar": composeStory(m6.default, m6["WithStickySidebar"], "WithStickySidebar"),
  "SidebarFullscreenResponsiveVariant": composeStory(m7.default, m7["SidebarFullscreenResponsiveVariant"], "SidebarFullscreenResponsiveVariant"),
};
export const skipped = {
};
