// @ts-nocheck
import { UnderlinePanels } from '@primer/react/experimental';
import {
  CodeIcon,
  CommentDiscussionIcon,
  EyeIcon,
  GearIcon,
  GitBranchIcon,
  GitPullRequestIcon,
  GraphIcon,
  PlayIcon,
  ProjectIcon,
  ShieldLockIcon,
  TagIcon,
} from '@primer/octicons-react'


export default {
  title: 'Experimental/Components/UnderlinePanels/Features',
  component: UnderlinePanels,
} as Meta<ComponentProps<typeof UnderlinePanels>>

export const WithIcons = () => (
  <UnderlinePanels aria-label="Tabs with icons">
    <UnderlinePanels.Tab icon={CodeIcon}>Tab 1</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={EyeIcon}>Tab 2</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={GitPullRequestIcon}>Tab 3</UnderlinePanels.Tab>
    <UnderlinePanels.Panel>Panel 1</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 2</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 3</UnderlinePanels.Panel>
  </UnderlinePanels>
)
