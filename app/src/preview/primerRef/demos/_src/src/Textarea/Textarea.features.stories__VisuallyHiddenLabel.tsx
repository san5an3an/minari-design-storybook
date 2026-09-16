// @ts-nocheck
import { FormControl } from '@primer/react';
import { Heading } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea/Features',
}

export const VisuallyHiddenLabel = () => (
  <form>
    <Heading as="h2" variant="small">
      Primer form title
    </Heading>
    <FormControl>
      <FormControl.Label visuallyHidden>Primer form label</FormControl.Label>
      <Textarea />
      <FormControl.Caption>Label is visually hidden; the title describes the purpose visually</FormControl.Caption>
    </FormControl>
  </form>
)
