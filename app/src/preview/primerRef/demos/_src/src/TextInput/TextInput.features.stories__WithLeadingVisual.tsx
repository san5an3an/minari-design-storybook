// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';
import {CalendarIcon, CheckIcon, XCircleFillIcon} from '@primer/octicons-react'


export default {
  title: 'Components/TextInput/Features',
}

export const WithLeadingVisual = () => {
  const Checkmark = () => <CheckIcon aria-label="Checkmark" />

  return (
    <form>
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInput leadingVisual={Checkmark} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Enter monies</FormControl.Label>
        <TextInput leadingVisual="$" />
      </FormControl>
    </form>
  )
}
