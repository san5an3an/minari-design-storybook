// @ts-nocheck
import { Radio } from '@primer/react';
import { RadioGroup } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/RadioGroup/Features',
}

export const VisuallyHiddenLabel = () => (
  <RadioGroup name="defaultRadioGroup">
    <RadioGroup.Label visuallyHidden>Choices</RadioGroup.Label>
    <FormControl>
      <Radio value="one" defaultChecked />
      <FormControl.Label>Choice one</FormControl.Label>
    </FormControl>
    <FormControl>
      <Radio value="two" />
      <FormControl.Label>Choice two</FormControl.Label>
    </FormControl>
    <FormControl>
      <Radio value="three" />
      <FormControl.Label>Choice three</FormControl.Label>
    </FormControl>
  </RadioGroup>
)
