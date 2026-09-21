// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react/src/components/Accordion/Accordion.stories__Default.tsx";
import * as m1 from "./_src/packages/react/src/components/Accordion/Accordion.stories__Controlled.tsx";
import * as m3 from "./_src/packages/react/src/components/Accordion/Accordion.stories__Skeleton.tsx";
export const demos = {
  "packages/react/src/components/Accordion/Accordion.stories.tsx#Default": composeStory(m0.default, m0["Default"], "Default"),
  "packages/react/src/components/Accordion/Accordion.stories.tsx#Controlled": composeStory(m1.default, m1["Controlled"], "Controlled"),
  "packages/react/src/components/Accordion/Accordion.stories.tsx#Skeleton": composeStory(m3.default, m3["Skeleton"], "Skeleton"),
};
export const skipped = {
  "packages/react/src/components/Accordion/Accordion.stories.tsx#_WithLayer": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
