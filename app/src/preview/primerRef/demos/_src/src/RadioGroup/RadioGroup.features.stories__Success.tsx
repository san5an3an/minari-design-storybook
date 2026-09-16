// @ts-nocheck
import { Radio } from '@primer/react';
import { RadioGroup } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/RadioGroup/Features',
}

export const Success = () => (
  <RadioGroup name="defaultRadioGroup">
    <RadioGroup.Label>Choices</RadioGroup.Label>
    <FormControl>
      <Radio value="one" />
      <FormControl.Label>Choice one</FormControl.Label>
    </FormControl>
    <FormControl>
      <Radio value="two" defaultChecked />
      <FormControl.Label>Choice two</FormControl.Label>
    </FormControl>
    <FormControl>
      <Radio value="three" />
      <FormControl.Label>Choice three</FormControl.Label>
    </FormControl>
    <RadioGroup.Validation variant="success">Great job!</RadioGroup.Validation>
  </RadioGroup>
)
