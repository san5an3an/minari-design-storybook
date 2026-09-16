// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/FormControl',
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
    variant: {
      control: {
        type: 'radio',
      },
      options: ['error', 'success', 'warning'],
    },
    variantMessage: {type: 'string'},
  },
} as Meta

export const Default = () => (
  <FormControl required={true}>
    <FormControl.Label>Form Input Label</FormControl.Label>
    <FormControl.Caption>This is a caption</FormControl.Caption>
    <Checkbox />
  </FormControl>
)
