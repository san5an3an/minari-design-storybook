// @ts-nocheck
import { Button } from '@primer/react';
import { Tooltip } from '@primer/react';
import classes from './Tooltip.features.stories.module.css'


export default {
  title: 'Components/TooltipV2/Features',
  component: Tooltip,
}

export const AnchorHasMargin = () => (
  <div className={classes.PaddedContainer}>
    <Tooltip text="Tooltip is still centered">
      <Button className={classes.MarginLeftButton}>Button has 16px margin Left</Button>
    </Tooltip>
  </div>
)
