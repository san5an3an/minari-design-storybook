// @ts-nocheck
import { Heading } from '@primer/react';
import { SplitPageLayout } from '@primer/react';
import classes from './SplitPageLayout.features.stories.module.css'


export default {
  title: 'Components/SplitPageLayout/Features',
  component: SplitPageLayout,
} as Meta<typeof SplitPageLayout>

export const WithResizableSidebar: StoryFn<typeof SplitPageLayout> = () => (
  <SplitPageLayout>
    <SplitPageLayout.Sidebar resizable position="start" aria-label="Resizable sidebar" style={{height: 'auto'}}>
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Resizable Sidebar</p>
        <p className={classes.SidebarText}>
          Drag the edge to resize this sidebar. The width will be persisted across sessions.
        </p>
      </div>
    </SplitPageLayout.Sidebar>
    <SplitPageLayout.Header>
      <Heading as="h1">Page Title</Heading>
    </SplitPageLayout.Header>
    <SplitPageLayout.Content>
      <Heading as="h2" className={classes.SectionHeading}>
        Main Content
      </Heading>
      <p>This layout has a resizable sidebar that can be dragged to adjust its width.</p>
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <p>Footer content</p>
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
