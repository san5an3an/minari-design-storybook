// @ts-nocheck
import { StateLabel } from '@primer/react';


export default {
  title: 'Components/StateLabel/Features',
  component: StateLabel,
} as Meta<ComponentProps<typeof StateLabel>>

export const Small = () => (
  <StateLabel status="issueOpened" size="small">
    Open
  </StateLabel>
)
