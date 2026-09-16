// @ts-nocheck
import { Heading } from '@primer/react';
import { NavList } from '@primer/react';
import { SplitPageLayout } from '@primer/react';
import classes from './SplitPageLayout.features.stories.module.css'


export default {
  title: 'Components/SplitPageLayout/Features',
  component: SplitPageLayout,
} as Meta<typeof SplitPageLayout>

export const WithSidebarEnd: StoryFn<typeof SplitPageLayout> = () => (
  <SplitPageLayout>
    <SplitPageLayout.Sidebar position="end" aria-label="Inspector sidebar" style={{height: 'auto'}}>
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Inspector</p>
        <p className={classes.SidebarText}>
          This sidebar is positioned at the end (right side) and spans the full height.
        </p>
      </div>
    </SplitPageLayout.Sidebar>
    <SplitPageLayout.Header>
      <Heading as="h1">Page Title</Heading>
    </SplitPageLayout.Header>
    <SplitPageLayout.Pane position="start" aria-label="Navigation Pane">
      <NavList aria-label="Main navigation">
        <NavList.Item href="#">Profile</NavList.Item>
        <NavList.Item href="#" aria-current="page">
          Account
        </NavList.Item>
        <NavList.Item href="#">Emails</NavList.Item>
        <NavList.Item href="#">Notifications</NavList.Item>
      </NavList>
    </SplitPageLayout.Pane>
    <SplitPageLayout.Content>
      <Heading as="h2" className={classes.SectionHeading}>
        Account Settings
      </Heading>
      <p>Main content area</p>
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <p>Footer content</p>
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
