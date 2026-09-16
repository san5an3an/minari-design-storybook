// @ts-nocheck
import {useState} from 'react'
import { FormControl } from '@primer/react';
import { TextInputWithTokens } from '@primer/react';
import classes from './TextInputWithTokens.features.stories.module.css'


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

export const MaxHeight = () => {
  const [tokens, setTokens] = useState([...mockTokens].slice(0, 7))
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId))
  }

  return (
    <div className={classes.MaxWidth}>
      {/* Setting max-width to force tokens to wrap and demo `maxHeight` behavior */}
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInputWithTokens
          tokens={tokens}
          onTokenRemove={onTokenRemove}
          maxHeight={70}
          block // `block` only needed to fill parent width without overflowing
        />
      </FormControl>
    </div>
  )
}
