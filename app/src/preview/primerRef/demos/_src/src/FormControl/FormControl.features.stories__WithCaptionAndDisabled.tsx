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

export const WithCaptionAndDisabled = () => (
  <FormControl disabled>
    <FormControl.Label>Example label</FormControl.Label>
    <TextInput />
    <FormControl.Caption>Example caption</FormControl.Caption>
  </FormControl>
)
