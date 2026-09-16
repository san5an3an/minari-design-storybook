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

export const SingleInput = ({label = 'Input', caption = '', required = false, disabled = false}: ArgTypes) => (
  <FormControl required={required} disabled={disabled}>
    <FormControl.Label>{label}</FormControl.Label>
    <TextInput />
    {caption && <FormControl.Caption>{caption}</FormControl.Caption>}
  </FormControl>
)
