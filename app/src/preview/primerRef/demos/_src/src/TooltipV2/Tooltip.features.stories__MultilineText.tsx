// @ts-nocheck
import { Button } from '@primer/react';
import { Tooltip } from '@primer/react';


export default {
  title: 'Components/TooltipV2/Features',
  component: Tooltip,
}

export const MultilineText = () => (
  <div>
    <Tooltip
      direction="e"
      text="Random long text that needs to be wrapped and be multipline and have some paddings around"
    >
      <Button>Multiline East</Button>
    </Tooltip>
  </div>
)
