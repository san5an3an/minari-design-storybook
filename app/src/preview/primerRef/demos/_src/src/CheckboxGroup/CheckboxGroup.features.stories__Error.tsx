// @ts-nocheck
import { Checkbox } from '@primer/react';
import { CheckboxGroup } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/CheckboxGroup/Features',
}

export const Error = () => (
  <CheckboxGroup>
    <CheckboxGroup.Label>Choices</CheckboxGroup.Label>
    <FormControl>
      <Checkbox value="one" defaultChecked />
      <FormControl.Label>Choice one</FormControl.Label>
    </FormControl>
    <FormControl>
      <Checkbox value="two" defaultChecked />
      <FormControl.Label>Choice two</FormControl.Label>
    </FormControl>
    <FormControl>
      <Checkbox value="three" />
      <FormControl.Label>Choice three</FormControl.Label>
    </FormControl>
    <CheckboxGroup.Validation variant="error">Something went wrong</CheckboxGroup.Validation>
  </CheckboxGroup>
)
