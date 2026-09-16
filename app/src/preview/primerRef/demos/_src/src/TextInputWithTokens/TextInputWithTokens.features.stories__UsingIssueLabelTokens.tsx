// @ts-nocheck
import {useState} from 'react'
import { FormControl } from '@primer/react';
import { TextInputWithTokens } from '@primer/react';
import { IssueLabelToken } from '@primer/react';


export default {
  title: 'Deprecated/Components/TextInputWithTokens/Features',
}

export const UsingIssueLabelTokens = () => {
  const [tokens, setTokens] = useState([
    {text: 'enhancement', id: 1, fillColor: '#a2eeef'},
    {text: 'bug', id: 2, fillColor: '#d73a4a'},
    {text: 'good first issue', id: 3, fillColor: '#0cf478'},
  ])
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId))
  }

  return (
    <form>
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInputWithTokens tokenComponent={IssueLabelToken} tokens={tokens} onTokenRemove={onTokenRemove} />
      </FormControl>
    </form>
  )
}
