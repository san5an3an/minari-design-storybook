// @ts-nocheck
import { FormControl } from '@primer/react';
import { Text } from '@primer/react';
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

export const CustomRequired = () => (
  <div className={classes.FlexColumnGapContainer}>
    <FormControl required={true}>
      <FormControl.Label requiredText="(required)">Form Input Label</FormControl.Label>
      <FormControl.Caption>This is a form field with a custom required indicator</FormControl.Caption>
      <TextInput />
    </FormControl>

    <Text className={classes.RequiredFieldsNote}>Required fields are marked with an asterisk (*)</Text>
    <FormControl required={true}>
      <FormControl.Label requiredIndicator={false}>Form Input Label</FormControl.Label>
      <FormControl.Caption>
        This is a form field with a required indicator that is hidden in the accessibility tree
      </FormControl.Caption>
      <TextInput />
    </FormControl>

    <FormControl required={false}>
      <FormControl.Label requiredText="(optional)" requiredIndicator={false}>
        Form Input Label
      </FormControl.Label>
      <FormControl.Caption>This is a form field that is marked as optional, it is not required</FormControl.Caption>
      <TextInput />
    </FormControl>
  </div>
)
