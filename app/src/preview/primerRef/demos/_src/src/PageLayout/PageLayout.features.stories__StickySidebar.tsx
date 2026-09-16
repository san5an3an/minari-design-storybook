// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const StickySidebar: StoryFn = () => (
  <PageLayout containerWidth="full">
    <PageLayout.Sidebar sticky position="start" aria-label="Sticky sidebar">
      <Placeholder height={200} label="Sticky Sidebar" />
    </PageLayout.Sidebar>
    <PageLayout.Header>
      <Placeholder height={64} label="Header" />
    </PageLayout.Header>
    <PageLayout.Content>
      <Placeholder height={2000} label="Tall Content (scroll to test sticky)" />
    </PageLayout.Content>
    <PageLayout.Footer>
      <Placeholder height={64} label="Footer" />
    </PageLayout.Footer>
  </PageLayout>
)
