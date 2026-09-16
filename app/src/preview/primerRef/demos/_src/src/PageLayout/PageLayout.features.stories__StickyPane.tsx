// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import { Link } from '@primer/react';
import classes from './PageLayout.features.stories.module.css'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const StickyPane: StoryFn = args => (
  <PageLayout rowGap="none" columnGap="none" padding="none" containerWidth="full">
    <PageLayout.Header padding="normal" divider="line">
      <Placeholder label="Header" height={64} />
    </PageLayout.Header>
    <PageLayout.Content padding="normal" width="large">
      <div className={classes.ContentGrid}>
        {Array.from({length: args.numParagraphsInContent}).map((_, i) => {
          const testId = `content${i}`
          return (
            <p key={i} className={classes.Paragraph}>
              <span data-testid={testId}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim id lorem tempus egestas a non
                ipsum. Maecenas imperdiet ante quam, at varius lorem molestie vel. Sed at eros consequat, varius tellus
                et, auctor felis. Donec pulvinar lacinia urna nec commodo. Phasellus at imperdiet risus. Donec sit amet
                massa purus. Nunc sem lectus, bibendum a sapien nec, tristique tempus felis. Ut porttitor auctor tellus
                in imperdiet. Ut blandit tincidunt augue, quis fringilla nunc tincidunt sed. Vestibulum auctor euismod
                nisi. Nullam tincidunt est in mi tincidunt dictum. Sed consectetur aliquet velit ut ornare.
              </span>
            </p>
          )
        })}
      </div>
    </PageLayout.Content>
    <PageLayout.Pane
      position="start"
      resizable
      padding="normal"
      divider="line"
      sticky={args.sticky}
      aria-label="Side pane"
    >
      <div className={classes.ContentGrid}>
        {Array.from({length: args.numParagraphsInPane}).map((_, i) => {
          const testId = `paragraph${i}`
          return (
            <p key={i} className={classes.Paragraph}>
              <span data-testid={testId}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim id lorem tempus egestas a non
                ipsum. Maecenas imperdiet ante quam, at varius lorem molestie vel. Sed at eros consequat, varius tellus
                et, auctor felis. Donec pulvinar lacinia urna nec commodo. Phasellus at imperdiet risus. Donec sit amet
                massa purus.
              </span>
            </p>
          )
        })}
        <p>
          Donec sit amet massa purus.{' '}
          <Link inline href="#foo">
            Plura de lorem Ispum.
          </Link>
        </p>
      </div>
    </PageLayout.Pane>
    <PageLayout.Footer padding="normal" divider="line">
      <Placeholder label="Footer" height={64} />
    </PageLayout.Footer>
  </PageLayout>
)

StickyPane.args = {
  sticky: true,
  numParagraphsInPane: 10,
  numParagraphsInContent: 30,
}

StickyPane.argTypes = {
  sticky: {
    type: 'boolean',
  },
  numParagraphsInPane: {
    type: 'number',
  },
  numParagraphsInContent: {
    type: 'number',
  },
}
