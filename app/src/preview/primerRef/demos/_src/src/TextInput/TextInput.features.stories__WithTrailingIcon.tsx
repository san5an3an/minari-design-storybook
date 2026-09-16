// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';
import {CalendarIcon, CheckIcon, XCircleFillIcon} from '@primer/octicons-react'


export default {
  title: 'Components/TextInput/Features',
}

export const WithTrailingIcon = () => {
  const Checkmark = () => <CheckIcon aria-label="Checkmark" />

  return (
    <div>
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInput trailingVisual={Checkmark} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Enter monies</FormControl.Label>
        <TextInput trailingVisual="minutes" placeholder="200" />
      </FormControl>
    </div>
  )
}
