// @ts-nocheck
import { Heading } from '@primer/react';
import { SplitPageLayout } from '@primer/react';
import classes from './SplitPageLayout.features.stories.module.css'


export default {
  title: 'Components/SplitPageLayout/Features',
  component: SplitPageLayout,
} as Meta<typeof SplitPageLayout>

export const WithSidebarAndResizablePane: StoryFn<typeof SplitPageLayout> = () => (
  <SplitPageLayout>
    <SplitPageLayout.Sidebar resizable position="start" aria-label="Navigation sidebar" style={{height: 'auto'}}>
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Sidebar</p>
        <p className={classes.SidebarText}>Full-height resizable sidebar</p>
      </div>
    </SplitPageLayout.Sidebar>
    <SplitPageLayout.Header>
      <Heading as="h1">Page Title</Heading>
    </SplitPageLayout.Header>
    <SplitPageLayout.Pane resizable position="end" aria-label="Details pane">
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Details Pane</p>
        <p className={classes.SidebarText}>This pane is also resizable and sits beside the content.</p>
      </div>
    </SplitPageLayout.Pane>
    <SplitPageLayout.Content>
      <Heading as="h2" className={classes.SectionHeading}>
        Main Content
      </Heading>
      <p>
        This layout demonstrates using both a full-height sidebar and a resizable pane together. The sidebar spans the
        entire height while the pane sits adjacent to the content area only.
      </p>
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <p>Footer content</p>
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
