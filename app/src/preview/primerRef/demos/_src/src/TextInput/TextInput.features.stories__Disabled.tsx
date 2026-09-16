// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';


export default {
  title: 'Components/TextInput/Features',
}

export const Disabled = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <TextInput disabled />
    </FormControl>
  </form>
)
