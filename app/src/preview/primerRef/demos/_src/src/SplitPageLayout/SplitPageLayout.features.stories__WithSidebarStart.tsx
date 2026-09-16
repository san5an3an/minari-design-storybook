// @ts-nocheck
import { Button } from '@primer/react';
import { Heading } from '@primer/react';
import { NavList } from '@primer/react';
import { SplitPageLayout } from '@primer/react';
import classes from './SplitPageLayout.features.stories.module.css'


export default {
  title: 'Components/SplitPageLayout/Features',
  component: SplitPageLayout,
} as Meta<typeof SplitPageLayout>

export const WithSidebarStart: StoryFn<typeof SplitPageLayout> = () => (
  <SplitPageLayout>
    <SplitPageLayout.Sidebar position="start" aria-label="Inspector sidebar" style={{height: 'auto'}}>
      <div className={classes.SidebarContent}>
        <p className={classes.SidebarHeading}>Sidebar</p>
        <p className={classes.SidebarText}>
          This sidebar spans the full height of the layout, adjacent to the header, content, and footer.
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
        Danger zone
      </Heading>
      <div className={classes.DeleteAccountContainer}>
        <div className={classes.DeleteAccountTextContainer}>
          <p className={classes.DeleteAccountTitle}>Delete account</p>
          <p className={classes.DeleteAccountDescription}>
            Are you sure you don&apos;t want to just downgrade your account to a free account? We won&apos;t charge your
            credit card anymore.
          </p>
        </div>
        <Button variant="danger">Delete account</Button>
      </div>
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <p>Footer content</p>
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
