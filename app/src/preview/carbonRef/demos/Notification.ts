// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m3 from "./_src/packages/react/src/components/Notification/stories/Callout.stories__Default.jsx";
import * as m4 from "./_src/packages/react/src/components/Notification/stories/Callout.stories__WithInteractiveElements.jsx";
import * as m6 from "./_src/packages/react/src/components/Notification/stories/StaticNotification.stories__Default.jsx";
export const demos = {
  "packages/react/src/components/Notification/stories/Callout.stories.js#Default": composeStory(m3.default, m3["Default"], "Default"),
  "packages/react/src/components/Notification/stories/Callout.stories.js#WithInteractiveElements": composeStory(m4.default, m4["WithInteractiveElements"], "WithInteractiveElements"),
  "packages/react/src/components/Notification/stories/StaticNotification.stories.js#Default": composeStory(m6.default, m6["Default"], "Default"),
};
export const skipped = {
  "packages/react/src/components/Notification/stories/ActionableNotification.featureflag.stories.js#FocusWrapWithoutSentinels": {"code":"package-missing","detail":"storybook/actions"},
  "packages/react/src/components/Notification/stories/ActionableNotification.stories.js#Default": {"code":"package-missing","detail":"storybook/actions"},
  "packages/react/src/components/Notification/stories/ActionableNotification.stories.js#Inline": {"code":"package-missing","detail":"storybook/actions"},
  "packages/react/src/components/Notification/stories/InlineNotification.stories.js#Default": {"code":"package-missing","detail":"storybook/actions"},
  "packages/react/src/components/Notification/stories/ToastNotification.stories.js#Default": {"code":"package-missing","detail":"storybook/actions"},
};
