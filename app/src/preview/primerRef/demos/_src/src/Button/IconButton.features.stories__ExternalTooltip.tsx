// @ts-nocheck
import {HeartIcon, InboxIcon, ChevronDownIcon, DownloadIcon, BoldIcon} from '@primer/octicons-react'
import { IconButton } from '@primer/react';
import { Tooltip } from '@primer/react';


export default {
  title: 'Components/IconButton/Features',
}

export const ExternalTooltip = () => (
  <Tooltip text="this is a supportive description for icon button" direction="se">
    <IconButton icon={HeartIcon} aria-label="HeartIcon" />
  </Tooltip>
)
