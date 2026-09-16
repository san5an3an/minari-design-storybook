// @ts-nocheck
import {useCallback, useState} from 'react'
import { FormControl } from '@primer/react';
import { TextInputWithTokens } from '@primer/react';
import {
  formControlArgs,
  formControlArgTypes,
  getFormControlArgsByChildComponent,
  getTextInputArgTypes,
  textInputExcludedControlKeys,
  textInputWithTokensArgTypes,
} from '../utils/story-helpers'


const excludedControls = ['tokens', 'onTokenRemove', 'tokenComponent', ...textInputExcludedControlKeys]

export default {
  title: 'Deprecated/Components/TextInputWithTokens',
  component: TextInputWithTokens,
  parameters: {controls: {exclude: excludedControls}},
} as Meta

const mockTokens = [
  {text: 'zero', id: 0},
  {text: 'one', id: 1},
  {text: 'two', id: 2},
  {text: 'three', id: 3},
  {text: 'four', id: 4},
  {text: 'five', id: 5},
  {text: 'six', id: 6},
  {text: 'seven', id: 7},
  {text: 'twenty', id: 20},
  {text: 'twentyone', id: 21},
]

export const Default = () => {
  const [tokens, setTokens] = useState([...mockTokens].slice(0, 3))
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId))
  }

  return (
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <TextInputWithTokens tokens={tokens} onTokenRemove={onTokenRemove} />
    </FormControl>
  )
}
