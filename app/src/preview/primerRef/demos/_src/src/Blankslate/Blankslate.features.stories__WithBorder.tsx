// @ts-nocheck
import {BookIcon} from '@primer/octicons-react'
import { Blankslate } from '@primer/react/experimental';


export default {
  title: 'Experimental/Components/Blankslate/Features',
  component: Blankslate,
  subcomponents: {
    'Blankslate.Visual': Blankslate.Visual,
    'Blankslate.Heading': Blankslate.Heading,
    'Blankslate.Description': Blankslate.Description,
    'Blankslate.PrimaryAction': Blankslate.PrimaryAction,
    'Blankslate.SecondaryAction': Blankslate.SecondaryAction,
  },
}

export const WithBorder = () => (
  <Blankslate border>
    <Blankslate.Visual>
      <BookIcon size="medium" />
    </Blankslate.Visual>
    <Blankslate.Heading>Blankslate heading</Blankslate.Heading>
    <Blankslate.Description>Use it to provide information when no dynamic content exists.</Blankslate.Description>
  </Blankslate>
)
