// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import classes from './PageLayout.features.stories.module.css'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const NestedScrollContainer: StoryFn = args => (
  <div className={classes.NestedScrollContainer}>
    <Placeholder label="Above scroll container" height={120} />
    <div className={classes.OverflowAuto}>
      <PageLayout rowGap="none" columnGap="none" padding="none" containerWidth="full">
        <PageLayout.Header padding="normal" divider="line">
          <Placeholder label="Header" height={64} />
        </PageLayout.Header>
        <PageLayout.Content padding="normal" width="large">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div className={classes.ContentGrid} tabIndex={0} role="region" aria-label="Page content">
            {Array.from({length: args.numParagraphsInContent}).map((_, i) => (
              <p key={i} className={classes.Paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim id lorem tempus egestas a non
                ipsum. Maecenas imperdiet ante quam, at varius lorem molestie vel. Sed at eros consequat, varius tellus
                et, auctor felis. Donec pulvinar lacinia urna nec commodo. Phasellus at imperdiet risus. Donec sit amet
                massa purus. Nunc sem lectus, bibendum a sapien nec, tristique tempus felis. Ut porttitor auctor tellus
                in imperdiet. Ut blandit tincidunt augue, quis fringilla nunc tincidunt sed. Vestibulum auctor euismod
                nisi. Nullam tincidunt est in mi tincidunt dictum. Sed consectetur aliquet velit ut ornare.
              </p>
            ))}
          </div>
        </PageLayout.Content>
        <PageLayout.Pane position="start" padding="normal" divider="line" sticky aria-label="Side pane">
          <div className={classes.ContentGrid}>
            {Array.from({length: args.numParagraphsInPane}).map((_, i) => (
              <p key={i} className={classes.Paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim id lorem tempus egestas a non
                ipsum. Maecenas imperdiet ante quam, at varius lorem molestie vel. Sed at eros consequat, varius tellus
                et, auctor felis. Donec pulvinar lacinia urna nec commodo. Phasellus at imperdiet risus. Donec sit amet
                massa purus.
              </p>
            ))}
          </div>
        </PageLayout.Pane>
        <PageLayout.Footer padding="normal" divider="line">
          <Placeholder label="Footer" height={64} />
        </PageLayout.Footer>
      </PageLayout>
    </div>
    <Placeholder label="Below scroll container" height={120} />
  </div>
)

NestedScrollContainer.args = {
  numParagraphsInPane: 10,
  numParagraphsInContent: 30,
}

NestedScrollContainer.argTypes = {
  numParagraphsInPane: {
    type: 'number',
  },
  numParagraphsInContent: {
    type: 'number',
  },
}
