// @ts-nocheck
import {PlusIcon, EyeIcon, FileCodeIcon, PeopleIcon} from '@primer/octicons-react'
import { SegmentedControl } from '@primer/react';


export default {
  title: 'Components/SegmentedControl/Features',
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>

export const VariantNarrowHideLabels = () => (
  <SegmentedControl aria-label="File view" variant={{narrow: 'hideLabels', regular: 'default', wide: 'default'}}>
    <SegmentedControl.Button defaultSelected aria-label={'Preview'} leadingVisual={EyeIcon}>
      Preview
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Raw'} leadingVisual={FileCodeIcon}>
      Raw
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Blame'} leadingVisual={PeopleIcon}>
      Blame
    </SegmentedControl.Button>
  </SegmentedControl>
)
VariantNarrowHideLabels.storyName = '[variant: narrow] Hide labels'
