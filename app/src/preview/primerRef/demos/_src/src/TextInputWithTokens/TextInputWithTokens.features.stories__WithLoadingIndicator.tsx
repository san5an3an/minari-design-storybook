// @ts-nocheck
import {useState} from 'react'
import {CheckIcon, NumberIcon} from '@primer/octicons-react'
import { FormControl } from '@primer/react';
import { TextInputWithTokens } from '@primer/react';
import {formControlArgTypes, textInputExcludedControlKeys} from '../utils/story-helpers'
import classes from './TextInputWithTokens.features.stories.module.css'


const excludedControls = ['tokens', 'onTokenRemove', 'tokenComponent', ...textInputExcludedControlKeys]

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

export const WithLoadingIndicator = (args: FormControlArgs<TextInputWithTokensProps>) => {
  const [tokens, setTokens] = useState([...mockTokens].slice(0, 3))
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId))
  }

  return (
    <form className={classes.Grid}>
      <FormControl>
        <FormControl.Label>No visual</FormControl.Label>
        <TextInputWithTokens {...args} tokens={tokens} onTokenRemove={onTokenRemove} />
      </FormControl>

      <FormControl>
        <FormControl.Label>Leading visual</FormControl.Label>
        <TextInputWithTokens {...args} tokens={tokens} onTokenRemove={onTokenRemove} leadingVisual={NumberIcon} />
      </FormControl>

      <FormControl>
        <FormControl.Label>Both visuals</FormControl.Label>
        <TextInputWithTokens
          {...args}
          tokens={tokens}
          onTokenRemove={onTokenRemove}
          leadingVisual={NumberIcon}
          trailingVisual={CheckIcon}
        />
      </FormControl>
    </form>
  )
}

WithLoadingIndicator.args = {
  loading: true,
}
WithLoadingIndicator.parameters = {
  controls: {
    exclude: [...excludedControls, 'loaderPosition', ...Object.keys(formControlArgTypes), 'children'],
  },
}
