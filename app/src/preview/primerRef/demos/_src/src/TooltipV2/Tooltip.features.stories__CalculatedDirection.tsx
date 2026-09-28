// @ts-nocheck
import { Button } from '@primer/react';
import { Tooltip } from '@primer/react';
import classes from './Tooltip.features.stories.module.css'


export default {
  title: 'Components/TooltipV2/Features',
  component: Tooltip,
}

export const CalculatedDirection = () => (
  <div className={classes.AllDirectionsRow}>
    <Tooltip direction="w" text="But appears in the east direction due to not having enough space in the west">
      <Button>West</Button>
    </Tooltip>

    <Tooltip text="The direction here is north by default but there is not enough space in the north therefore the tooltip appears in the south">
      <Button>North</Button>
    </Tooltip>
  </div>
)
