// @ts-nocheck
import { Button } from '@primer/react';
import { Tooltip } from '@primer/react';
import classes from './Tooltip.features.stories.module.css'


export default {
  title: 'Components/TooltipV2/Features',
  component: Tooltip,
}

// As a supplementary description for a button
export const DescriptionType = () => (
  <div className={classes.PaddedContainer}>
    <Tooltip text="Supplementary text" direction="n">
      <Button>Save</Button>
    </Tooltip>
  </div>
)
