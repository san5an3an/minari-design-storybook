// @ts-nocheck
import {INITIAL_VIEWPORTS} from 'storybook/viewport'
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

export const WithIconsHiddenOnNarrowScreen = () => (
  <UnderlinePanels aria-label="Tabs with icons">
    <UnderlinePanels.Tab icon={CodeIcon}>Tab 1</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={EyeIcon}>Tab 2</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={GitPullRequestIcon}>Tab 3</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={CommentDiscussionIcon}>Tab 4</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={PlayIcon}>Tab 5</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={ProjectIcon}>Tab 6</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={GraphIcon}>Tab 7</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={GearIcon}>Tab 8</UnderlinePanels.Tab>
    <UnderlinePanels.Tab icon={ShieldLockIcon}>Tab 9</UnderlinePanels.Tab>
    <UnderlinePanels.Panel>Panel 1</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 2</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 3</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 4</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 5</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 6</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 7</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 8</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 9</UnderlinePanels.Panel>
  </UnderlinePanels>
)

WithIconsHiddenOnNarrowScreen.parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      narrowScreen: {
        name: 'Narrow Screen',
        styles: {
          width: '800px',
          height: '100%',
        },
      },
    },
    defaultViewport: 'narrowScreen',
  },
}
