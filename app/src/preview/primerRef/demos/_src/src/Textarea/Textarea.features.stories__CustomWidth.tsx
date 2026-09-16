// @ts-nocheck
import { FormControl } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea/Features',
}

export const CustomWidth = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea cols={60} />
    </FormControl>
  </form>
)
