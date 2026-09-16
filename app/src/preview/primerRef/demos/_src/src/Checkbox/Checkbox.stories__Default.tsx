// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';


const excludedControlKeys = ['required', 'value', 'validationStatus']

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {controls: {exclude: excludedControlKeys}},
} as Meta

export const Default = () => (
  <form>
    <FormControl>
      <Checkbox value="default" />
      <FormControl.Label>Default label</FormControl.Label>
    </FormControl>
  </form>
)
