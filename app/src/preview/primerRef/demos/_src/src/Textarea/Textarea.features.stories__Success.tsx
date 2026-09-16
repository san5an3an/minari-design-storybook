// @ts-nocheck
import { FormControl } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea/Features',
}

export const Success = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea />
      <FormControl.Validation variant="success">Success</FormControl.Validation>
    </FormControl>
  </form>
)
