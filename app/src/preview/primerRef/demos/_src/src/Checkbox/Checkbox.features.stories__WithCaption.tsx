// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/Checkbox/Features',
}

export const WithCaption = () => {
  return (
    <form>
      <FormControl>
        <Checkbox value="default" />
        <FormControl.Label>Default label</FormControl.Label>
        <FormControl.Caption>This is a caption</FormControl.Caption>
      </FormControl>
    </form>
  )
}
