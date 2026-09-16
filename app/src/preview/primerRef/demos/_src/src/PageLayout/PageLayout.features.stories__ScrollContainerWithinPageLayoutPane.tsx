// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import classes from './PageLayout.features.stories.module.css'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const ScrollContainerWithinPageLayoutPane: StoryFn = () => (
  <div className={classes.NestedScrollContainer}>
    <div className={classes.OverflowAuto}>
      <Placeholder label="Above inner scroll container" height={120} />
      <PageLayout rowGap="none" columnGap="none" padding="none" containerWidth="full">
        <PageLayout.Pane position="start" padding="normal" divider="line" sticky aria-label="Sticky pane">
          <div className={classes.OverflowAuto}>
            <PageLayout.Pane padding="normal" aria-label="Side pane">
              <Placeholder label="Inner scroll container" height={800} />
            </PageLayout.Pane>
          </div>
        </PageLayout.Pane>
        <PageLayout.Content padding="normal" width="large">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div className={classes.ContentGrid} tabIndex={0} role="region" aria-label="Page content">
            <Placeholder label="Page content" height={1600} />
          </div>
        </PageLayout.Content>
      </PageLayout>
      <Placeholder label="Beneath inner scroll container" height={120} />
    </div>
  </div>
)
