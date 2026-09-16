// @ts-nocheck
import { Truncate } from '@primer/react';


export default {
  title: 'Components/Truncate/Features',
  component: Truncate,
} as Meta<typeof Truncate>

export const Expandable = () => (
  <Truncate title="Hover this example text" expandable>
    Hover this example text
  </Truncate>
)
