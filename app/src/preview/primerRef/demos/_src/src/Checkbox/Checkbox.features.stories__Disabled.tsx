// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/Checkbox/Features',
}

export const Disabled = () => {
  return (
    <form>
      <FormControl disabled>
        <Checkbox value="default" />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>
  )
}
