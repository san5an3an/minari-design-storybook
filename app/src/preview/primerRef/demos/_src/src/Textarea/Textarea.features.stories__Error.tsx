// @ts-nocheck
import { FormControl } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea/Features',
}

export const Error = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea />
      <FormControl.Validation variant="error">Something went wrong</FormControl.Validation>
    </FormControl>
  </form>
)
