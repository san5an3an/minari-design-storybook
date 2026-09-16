// @ts-nocheck
import { SegmentedControl } from '@primer/react';
import { Text } from '@primer/react';
import classes from './SegmentedControl.features.stories.module.css'


export default {
  title: 'Components/SegmentedControl/Features',
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>

export const AssociatedWithALabelAndCaption = () => (
  <div className={classes.LabelAndCaptionContainer}>
    <div className={classes.LabelAndCaption}>
      <Text className={classes.TextLargeBold} id="scLabel-vert" style={{display: 'block'}}>
        File view
      </Text>
      <Text className={classes.TextMediumSubtle} id="scCaption-vert" style={{display: 'block'}}>
        Change the way the file is viewed
      </Text>
    </div>
    <SegmentedControl aria-labelledby="scLabel-vert" aria-describedby="scCaption-vert">
      <SegmentedControl.Button defaultSelected>Preview</SegmentedControl.Button>
      <SegmentedControl.Button>Raw</SegmentedControl.Button>
      <SegmentedControl.Button>Blame</SegmentedControl.Button>
    </SegmentedControl>
  </div>
)
AssociatedWithALabelAndCaption.storyName = '[Example] Associated with a label and caption'
