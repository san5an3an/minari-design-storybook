// @ts-nocheck
import { FormControl } from '@primer/react';
import { Radio } from '@primer/react';


const excludedControlKeys = ['required', 'value', 'name', 'validationStatus']

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {controls: {exclude: excludedControlKeys}},
} as Meta

export const Default = () => (
  <form>
    <FormControl>
      <Radio name="default-radio-name" value="default" />
      <FormControl.Label>Label</FormControl.Label>
    </FormControl>
  </form>
)
