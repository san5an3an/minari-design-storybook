// @ts-nocheck
import { FormControl } from '@primer/react';
import { Radio } from '@primer/react';


export default {
  title: 'Components/Radio/Features',
  component: Radio,
}

export const Disabled = () => {
  return (
    <form>
      <FormControl disabled>
        <Radio value="default" name="default-radio-name" />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>
  )
}
