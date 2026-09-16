// @ts-nocheck
import React, {useState} from 'react'
import { Autocomplete } from '@primer/react';
import { FormControl } from '@primer/react';
import { Select } from '@primer/react';
import { TextInputWithTokens } from '@primer/react';
import { Textarea } from '@primer/react';
import classes from './FormControl.features.stories.module.css'


export default {
  title: 'Components/FormControl/Features',
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    required: {
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    caption: {
      type: 'string',
    },
  },
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

export const WithComplexInputs = () => {
  const [tokens, setTokens] = useState([...mockTokens])
  const onTokenRemove = (tokenId: string | number) => {
    setTokens(tokens.filter((token: {id: string | number}) => token.id !== tokenId))
  }

  return (
    <div className={classes.GridContainer}>
      <FormControl>
        <FormControl.Label id="form-label">TextInputWithTokens</FormControl.Label>
        <TextInputWithTokens onTokenRemove={onTokenRemove} tokens={tokens} />
      </FormControl>
      <FormControl>
        <FormControl.Label id="autocomplete-label">Autocomplete</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input block />
          <Autocomplete.Overlay>
            <Autocomplete.Menu
              aria-labelledby="autocomplete-label"
              items={[
                {text: 'css', id: '0'},
                {text: 'css-in-js', id: '1'},
                {text: 'styled-system', id: '2'},
                {text: 'javascript', id: '3'},
                {text: 'typescript', id: '4'},
                {text: 'react', id: '5'},
                {text: 'design-systems', id: '6'},
              ]}
              selectedItemIds={[]}
            />
          </Autocomplete.Overlay>
        </Autocomplete>
      </FormControl>
      <FormControl>
        <FormControl.Label>Select</FormControl.Label>
        <Select>
          <Select.Option value="figma">Figma</Select.Option>
          <Select.Option value="css">Primer CSS</Select.Option>
          <Select.Option value="prc">Primer React components</Select.Option>
          <Select.Option value="pvc">Primer ViewComponents</Select.Option>
        </Select>
      </FormControl>
      <FormControl>
        <FormControl.Label>Textarea</FormControl.Label>
        <Textarea />
      </FormControl>
    </div>
  )
}
