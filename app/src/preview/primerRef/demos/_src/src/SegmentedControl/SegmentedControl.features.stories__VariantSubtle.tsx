// @ts-nocheck
import { SegmentedControl } from '@primer/react';


export default {
  title: 'Components/SegmentedControl/Features',
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>

export const VariantSubtle = () => (
  <SegmentedControl aria-label="View" variant="subtle">
    <SegmentedControl.Button defaultSelected count={5}>
      All
    </SegmentedControl.Button>
    <SegmentedControl.Divider />
    <SegmentedControl.Button count={3}>Active</SegmentedControl.Button>
    <SegmentedControl.Button count={10}>Review requests</SegmentedControl.Button>
    <SegmentedControl.Divider />
    <SegmentedControl.Button count={2}>Done</SegmentedControl.Button>
  </SegmentedControl>
)
VariantSubtle.storyName = '[variant: subtle] Low emphasis'
