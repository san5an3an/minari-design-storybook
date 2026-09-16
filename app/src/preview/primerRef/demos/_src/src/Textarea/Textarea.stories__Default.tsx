// @ts-nocheck
import { FormControl } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta

export const Default = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea />
    </FormControl>
  </form>
)
