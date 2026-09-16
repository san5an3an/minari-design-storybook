// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react/src/components/NumberInput/NumberInput.stories__Default.jsx";
import * as m1 from "./_src/packages/react/src/components/NumberInput/NumberInput.stories__withAILabel.jsx";
import * as m5 from "./_src/packages/react/src/components/NumberInput/NumberInput.stories__Skeleton.jsx";
export const demos = {
  "packages/react/src/components/NumberInput/NumberInput.stories.js#Default": composeStory(m0.default, m0["Default"], "Default"),
  "packages/react/src/components/NumberInput/NumberInput.stories.js#withAILabel": composeStory(m1.default, m1["withAILabel"], "withAILabel"),
  "packages/react/src/components/NumberInput/NumberInput.stories.js#Skeleton": composeStory(m5.default, m5["Skeleton"], "Skeleton"),
};
export const skipped = {
  "packages/react/src/components/NumberInput/NumberInput.stories.js#WithTypeOfText": {"code":"private-api","detail":"useDocumentLang 설치본에 internal/useDocumentLang.js 없음"},
  "packages/react/src/components/NumberInput/NumberInput.stories.js#WithTypeOfTextControlled": {"code":"package-missing","detail":"storybook/actions"},
  "packages/react/src/components/NumberInput/NumberInput.stories.js#WithTypeOfCustomValidation": {"code":"private-api","detail":"useDocumentLang 설치본에 internal/useDocumentLang.js 없음"},
};
