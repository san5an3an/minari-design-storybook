// @ts-nocheck
import { Heading } from '@primer/react';
import { SplitPageLayout } from '@primer/react';
import classes from './SplitPageLayout.features.stories.module.css'


export default {
  title: 'Components/SplitPageLayout/Features',
  component: SplitPageLayout,
} as Meta<typeof SplitPageLayout>

export const WithStickySidebar: StoryFn<typeof SplitPageLayout> = () => (
  <SplitPageLayout>
    <SplitPageLayout.Sidebar sticky position="start" aria-label="Sticky sidebar">
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Sticky Sidebar</p>
        <p className={classes.SidebarText}>This sidebar stays fixed in the viewport as you scroll the page content.</p>
      </div>
    </SplitPageLayout.Sidebar>
    <SplitPageLayout.Header>
      <Heading as="h1">Page Title</Heading>
    </SplitPageLayout.Header>
    <SplitPageLayout.Content>
      <Heading as="h2" className={classes.SectionHeading}>
        Scrollable Content
      </Heading>
      {Array.from({length: 20}).map((_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim id lorem tempus egestas a non ipsum.
          Maecenas imperdiet ante quam, at varius lorem molestie vel.
        </p>
      ))}
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <p>Footer content</p>
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
