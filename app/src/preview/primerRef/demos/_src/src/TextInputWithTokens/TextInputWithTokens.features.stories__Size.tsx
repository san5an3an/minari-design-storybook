// @ts-nocheck
import {useState} from 'react'
import { FormControl } from '@primer/react';
import { TextInputWithTokens } from '@primer/react';


export default {
  title: 'Deprecated/Components/TextInputWithTokens/Features',
}

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

export const Size = () => {
  const [tokens, setTokens] = useState([...mockTokens].slice(0, 3))
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId))
  }

  return (
    <form>
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInputWithTokens tokens={tokens} onTokenRemove={onTokenRemove} size="small" />
      </FormControl>
    </form>
  )
}
