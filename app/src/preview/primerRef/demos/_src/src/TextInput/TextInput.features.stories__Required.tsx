// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';


export default {
  title: 'Components/TextInput/Features',
}

export const Required = () => (
  <form>
    <FormControl required>
      <FormControl.Label>Default label</FormControl.Label>
      <TextInput size="large" />
    </FormControl>
  </form>
)
