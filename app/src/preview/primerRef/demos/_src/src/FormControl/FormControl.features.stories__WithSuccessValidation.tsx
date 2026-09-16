// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';


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

export const WithSuccessValidation = () => (
  <FormControl required>
    <FormControl.Label requiredIndicator>Example label</FormControl.Label>
    <TextInput defaultValue="Input value" />
    <FormControl.Validation variant="success">Example success validation message</FormControl.Validation>
  </FormControl>
)
