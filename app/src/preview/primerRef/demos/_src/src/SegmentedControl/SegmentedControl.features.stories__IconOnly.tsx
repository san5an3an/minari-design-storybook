// @ts-nocheck
import {PlusIcon, EyeIcon, FileCodeIcon, PeopleIcon} from '@primer/octicons-react'
import { SegmentedControl } from '@primer/react';


export default {
  title: 'Components/SegmentedControl/Features',
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>

export const IconOnly = () => (
  <SegmentedControl aria-label="File view">
    <SegmentedControl.IconButton defaultSelected aria-label={'Preview'} icon={EyeIcon} />
    <SegmentedControl.IconButton aria-label={'Raw'} icon={FileCodeIcon} />
    <SegmentedControl.IconButton aria-label={'Blame'} icon={PeopleIcon} />
  </SegmentedControl>
)
IconOnly.storyName = 'Icon only'
