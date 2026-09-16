// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const SidebarEnd: StoryFn = () => (
  <PageLayout containerWidth="full">
    <PageLayout.Sidebar position="end" aria-label="Inspector sidebar">
      <Placeholder height={800} label="Sidebar (End)" />
    </PageLayout.Sidebar>
    <PageLayout.Header>
      <Placeholder height={64} label="Header" />
    </PageLayout.Header>
    <PageLayout.Content>
      <Placeholder height={640} label="Content" />
    </PageLayout.Content>
    <PageLayout.Footer>
      <Placeholder height={64} label="Footer" />
    </PageLayout.Footer>
  </PageLayout>
)
