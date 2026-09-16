// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import { Heading } from '@primer/react';
import classes from './PageLayout.features.stories.module.css'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const WithCustomPaneHeading: StoryFn = () => (
  <PageLayout containerWidth="full">
    <PageLayout.Header>
      <Placeholder height={64} label="Header" />
    </PageLayout.Header>
    <PageLayout.Pane resizable position="start" aria-label="Side pane">
      <Heading as="h2" className={classes.PaneHeading} id="pane-heading">
        Pane Heading
      </Heading>
      <Placeholder height={320} label="Pane" />
    </PageLayout.Pane>
    <PageLayout.Content>
      <Placeholder height={640} label="Content" />
    </PageLayout.Content>
    <PageLayout.Footer>
      <Placeholder height={64} label="Footer" />
    </PageLayout.Footer>
  </PageLayout>
)
