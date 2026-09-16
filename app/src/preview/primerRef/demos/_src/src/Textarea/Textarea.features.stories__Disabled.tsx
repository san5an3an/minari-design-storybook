// @ts-nocheck
import { FormControl } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea/Features',
}

export const Disabled = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea disabled />
    </FormControl>
  </form>
)
