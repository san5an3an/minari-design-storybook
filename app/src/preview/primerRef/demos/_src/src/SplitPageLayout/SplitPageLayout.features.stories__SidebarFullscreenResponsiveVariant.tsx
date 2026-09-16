// @ts-nocheck
import { Heading } from '@primer/react';
import { SplitPageLayout } from '@primer/react';
import classes from './SplitPageLayout.features.stories.module.css'


export default {
  title: 'Components/SplitPageLayout/Features',
  component: SplitPageLayout,
} as Meta<typeof SplitPageLayout>

export const SidebarFullscreenResponsiveVariant: StoryFn<typeof SplitPageLayout> = () => (
  <SplitPageLayout>
    <SplitPageLayout.Sidebar
      position="start"
      responsiveVariant="fullscreen"
      aria-label="Fullscreen sidebar"
      style={{height: 'auto'}}
    >
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Fullscreen on Narrow</p>
        <p className={classes.SidebarText}>
          Resize the viewport below 768px to see this sidebar expand to fill the entire screen.
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
      <p>This content is hidden behind the sidebar at narrow viewports.</p>
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <p>Footer content</p>
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
