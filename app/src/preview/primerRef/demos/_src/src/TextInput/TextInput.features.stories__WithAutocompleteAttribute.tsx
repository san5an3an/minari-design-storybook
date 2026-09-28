// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';


export default {
  title: 'Components/TextInput/Features',
}

export const WithAutocompleteAttribute = () => (
  <form>
    <FormControl>
      <FormControl.Label>First name</FormControl.Label>
      <TextInput autoComplete="given-name" />
    </FormControl>
    <FormControl>
      <FormControl.Label>Last name</FormControl.Label>
      <TextInput autoComplete="family-name" />
    </FormControl>
  </form>
)
