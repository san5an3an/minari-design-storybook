// @ts-nocheck
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import classes from './PageLayout.features.stories.module.css'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const CustomStickyHeader: StoryFn = args => (
  // a box to create a sticky top element that will be on the consumer side and outside of the PageLayout component
  <div data-testid="story-window">
    <header data-testid="sticky-header" className={classes.StickyHeader} style={{height: args.offsetHeader}}>
      Custom sticky header
    </header>
    <PageLayout rowGap="none" columnGap="none" padding="none" containerWidth="full">
      <PageLayout.Content padding="normal" width="large">
        <div className={classes.ContentGrid} data-testid="scrollContainer">
          {Array.from({length: args.numParagraphsInContent}).map((_, i) => {
            const testId = `content${i}`
            return (
              <p key={i} className={classes.Paragraph}>
                <span data-testid={testId}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae orci et magna consectetur
                  ullamcorper eget ac purus. Nam at enim id lorem tempus egestas a non ipsum. Maecenas imperdiet ante
                  quam, at varius lorem molestie vel. Sed at eros consequat, varius tellus et, auctor felis. Donec
                  pulvinar lacinia urna nec commodo. Phasellus at imperdiet risus. Donec sit amet massa purus. Nunc sem
                  lectus, bibendum a sapien nec, tristique tempus felis. Ut porttitor auctor tellus in imperdiet. Ut
                  blandit tincidunt augue, quis fringilla nunc tincidunt sed. Vestibulum auctor euismod nisi. Nullam
                  tincidunt est in mi tincidunt dictum. Sed consectetur aliquet velit ut ornare.
                </span>
              </p>
            )
          })}
        </div>
      </PageLayout.Content>
      <PageLayout.Pane
        position="start"
        padding="normal"
        divider="line"
        aria-label="Aside pane"
        sticky
        offsetHeader={args.offsetHeader}
      >
        <div className={classes.ContentGrid}>
          {Array.from({length: args.numParagraphsInPane}).map((_, i) => {
            const testId = `paragraph${i}`
            return (
              <p key={i} className={classes.Paragraph}>
                <span data-testid={testId}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim id lorem tempus egestas a non
                  ipsum. Maecenas imperdiet ante quam, at varius lorem molestie vel. Sed at eros consequat, varius
                  tellus et, auctor felis. Donec pulvinar lacinia urna nec commodo. Phasellus at imperdiet risus. Donec
                  sit amet massa purus.
                </span>
              </p>
            )
          })}
        </div>
      </PageLayout.Pane>
      <PageLayout.Footer padding="normal" divider="line">
        <Placeholder label="Footer" height={64} />
      </PageLayout.Footer>
    </PageLayout>
  </div>
)

CustomStickyHeader.args = {
  sticky: true,
  offsetHeader: '8rem',
  numParagraphsInPane: 10,
  numParagraphsInContent: 30,
}

CustomStickyHeader.argTypes = {
  sticky: {
    type: 'boolean',
  },
  offsetHeader: {
    type: 'string',
  },
  numParagraphsInPane: {
    type: 'number',
  },
  numParagraphsInContent: {
    type: 'number',
  },
}
