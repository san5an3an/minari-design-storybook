// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';
import { Select } from '@primer/react';
import { TextInput } from '@primer/react';
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

export const DisabledInputs = () => (
  <div className={classes.FlexColumnGapContainer}>
    <FormControl disabled>
      <FormControl.Label>Disabled checkbox</FormControl.Label>
      <Checkbox />
    </FormControl>
    <FormControl disabled>
      <FormControl.Label>Disabled input</FormControl.Label>
      <TextInput />
    </FormControl>
    <FormControl disabled>
      <FormControl.Label>Disabled select</FormControl.Label>
      <Select>
        <Select.Option value="figma">Figma</Select.Option>
        <Select.Option value="css">Primer CSS</Select.Option>
        <Select.Option value="prc">Primer React components</Select.Option>
        <Select.Option value="pvc">Primer ViewComponents</Select.Option>
      </Select>
    </FormControl>
  </div>
)
