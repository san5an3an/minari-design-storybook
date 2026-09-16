// @ts-nocheck
import { Checkbox } from '@primer/react';
import { CheckboxGroup } from '@primer/react';
import { FormControl } from '@primer/react';
import { Radio } from '@primer/react';
import { RadioGroup } from '@primer/react';
import classes from './FormControl.features.stories.module.css'


export default {
  title: 'Components/FormControl/Features',
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    required: {
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    caption: {
      type: 'string',
    },
  },
} as Meta

export const WithCheckboxAndRadioInputs = () => {
  return (
    <div className={classes.GapContainer}>
      <CheckboxGroup>
        <CheckboxGroup.Label>Checkboxes</CheckboxGroup.Label>
        <FormControl>
          <Checkbox value="checkOne" />
          <FormControl.Label>Checkbox one</FormControl.Label>
        </FormControl>
        <FormControl>
          <Checkbox value="checkTwo" />
          <FormControl.Label>Checkbox two</FormControl.Label>
        </FormControl>
        <FormControl>
          <Checkbox value="checkThree" />
          <FormControl.Label>Checkbox three</FormControl.Label>
        </FormControl>
      </CheckboxGroup>

      <RadioGroup name={''}>
        <RadioGroup.Label>Radios</RadioGroup.Label>
        <FormControl>
          <Radio name="radioChoices" value="radioOne" />
          <FormControl.Label>Radio one</FormControl.Label>
        </FormControl>
        <FormControl>
          <Radio name="radioChoices" value="radioTwo" />
          <FormControl.Label>Radio two</FormControl.Label>
        </FormControl>
        <FormControl>
          <Radio name="radioChoices" value="radioThree" />
          <FormControl.Label>Radio three</FormControl.Label>
        </FormControl>
      </RadioGroup>
    </div>
  )
}
