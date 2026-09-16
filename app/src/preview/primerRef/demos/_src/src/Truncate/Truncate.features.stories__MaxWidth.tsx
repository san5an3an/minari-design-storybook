// @ts-nocheck
import { Truncate } from '@primer/react';


export default {
  title: 'Components/Truncate/Features',
  component: Truncate,
} as Meta<typeof Truncate>

export const MaxWidth = () => (
  <Truncate title="Some example text with a max width" maxWidth={200}>
    Some example text with a max width
  </Truncate>
)
