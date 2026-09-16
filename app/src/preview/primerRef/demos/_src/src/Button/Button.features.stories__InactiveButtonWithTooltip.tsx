// @ts-nocheck
import { Button } from '@primer/react';
import { Tooltip } from '@primer/react';


export default {
  title: 'Components/Button/Features',
}

export const InactiveButtonWithTooltip = () => (
  <Tooltip text="Action unavailable: an error occurred while loading repository permissions" direction="n">
    <Button inactive>Review changes</Button>
  </Tooltip>
)
