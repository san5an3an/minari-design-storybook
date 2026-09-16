// @ts-nocheck
import { FormControl } from '@primer/react';
import { Radio } from '@primer/react';


export default {
  title: 'Components/Radio/Features',
  component: Radio,
}

export const WithCaption = () => {
  return (
    <form>
      <FormControl>
        <Radio value="default" name="default-radio-name" />
        <FormControl.Label>Default label</FormControl.Label>
        <FormControl.Caption>This is a caption</FormControl.Caption>
      </FormControl>
    </form>
  )
}
