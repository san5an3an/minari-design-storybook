// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';
import {
  formControlArgs,
  formControlArgTypes,
  getFormControlArgsByChildComponent,
  getTextInputArgTypes,
  textInputExcludedControlKeys,
} from '../utils/story-helpers'


export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {controls: {exclude: textInputExcludedControlKeys}},
} as Meta

export const Default = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <TextInput />
    </FormControl>
  </form>
)
