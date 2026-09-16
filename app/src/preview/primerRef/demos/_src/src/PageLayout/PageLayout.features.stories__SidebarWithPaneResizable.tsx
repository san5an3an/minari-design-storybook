// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const SidebarWithPaneResizable: StoryFn = () => (
  <PageLayout containerWidth="full">
    <PageLayout.Sidebar
      style={{height: 'auto'}}
      resizable
      position="end"
      aria-label="Navigation sidebar"
      width={{min: '200px', default: '300px', max: '2000px'}}
    >
      <Placeholder height="100%" label="Resizable Sidebar" />
    </PageLayout.Sidebar>
    <PageLayout.Header>
      <Placeholder height={64} label="Header" />
    </PageLayout.Header>
    <PageLayout.Pane resizable position="start" aria-label="Side pane">
      <Placeholder height={320} label="Resizable Pane" />
    </PageLayout.Pane>
    <PageLayout.Content>
      <Placeholder height={640} label="Content" />
    </PageLayout.Content>
    <PageLayout.Footer>
      <Placeholder height={64} label="Footer" />
    </PageLayout.Footer>
  </PageLayout>
)
