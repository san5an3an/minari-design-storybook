// @ts-nocheck
import { IconButton } from '@primer/react';
import { Tooltip } from '@primer/react';
import {
  SearchIcon,
  BookIcon,
  CheckIcon,
  TriangleDownIcon,
  GitBranchIcon,
  InfoIcon,
  HeartIcon,
} from '@primer/octicons-react'
import classes from './Tooltip.features.stories.module.css'


export default {
  title: 'Components/TooltipV2/Features',
  component: Tooltip,
}

// As a supplementary description for an IconButton
export const IconButtonWithDescription = () => (
  <div className={classes.PaddedContainer}>
    <Tooltip text="Supplementary text for icon button" direction="e">
      <IconButton icon={SearchIcon} aria-label="Search" />
    </Tooltip>
  </div>
)
