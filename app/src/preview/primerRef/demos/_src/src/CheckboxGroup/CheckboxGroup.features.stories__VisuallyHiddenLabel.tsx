// @ts-nocheck
import { Checkbox } from '@primer/react';
import { CheckboxGroup } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/CheckboxGroup/Features',
}

export const VisuallyHiddenLabel = () => (
  <CheckboxGroup>
    <CheckboxGroup.Label visuallyHidden>Choices</CheckboxGroup.Label>
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
  </CheckboxGroup>
)
