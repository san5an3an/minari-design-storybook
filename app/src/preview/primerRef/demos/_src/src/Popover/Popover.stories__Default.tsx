// @ts-nocheck
import { Heading } from '@primer/react';
import { Popover } from '@primer/react';
import { Text } from '@primer/react';
import { Button } from '@primer/react';


export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta<typeof Popover>

export const Default = () => (
  <Popover relative open={true} caret="top">
    <Popover.Content style={{marginTop: 'var(--base-size-8)'}}>
      <Heading style={{fontSize: 'var(--text-title-size-small)'}}>Popover heading</Heading>
      <Text as="p">Message about popovers</Text>
      <Button>Got it!</Button>
    </Popover.Content>
  </Popover>
)
