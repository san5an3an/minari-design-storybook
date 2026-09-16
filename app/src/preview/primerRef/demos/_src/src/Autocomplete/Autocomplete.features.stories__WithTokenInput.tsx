// @ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react'
import { BaseStyles } from '@primer/react';
import { TextInputWithTokens as TextInputTokens } from '@primer/react';
import { Autocomplete } from '@primer/react';
import { FormControl } from '@primer/react';
import {
  formControlArgs,
  formControlArgTypes,
  getFormControlArgsByChildComponent,
  getTextInputArgTypes,
} from '../utils/story-helpers'
import classes from './Autocomplete.features.stories.module.css'


const excludedControlKeys = ['id']

const items: Datum[] = [
  {text: 'css', id: '0'},
  {text: 'css-in-js', id: '1'},
  {text: 'styled-system', id: '2'},
  {text: 'javascript', id: '3'},
  {text: 'typescript', id: '4'},
  {text: 'react', id: '5'},
  {text: 'design-systems', id: '6'},
]

const autocompleteStoryMeta: Meta = {
  title: 'Components/Autocomplete/Features',
  decorators: [
    Story => {
      const [lastKey, setLastKey] = useState('none')
      const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        setLastKey(event.key)
      }, [])

      return (
        <BaseStyles>
          <div onKeyDownCapture={reportKey}>
            <p className={classes.LastKeyPressed} id="key-press-label">
              Last key pressed: {lastKey}
            </p>
            <div className={classes.StoryPadding}>
              <Story />
            </div>
          </div>
        </BaseStyles>
      )
    },
  ],
  parameters: {controls: {exclude: excludedControlKeys}},
  args: {
    ...formControlArgs,
    emptyStateText: 'No selectable options',
    menuLoading: false,
    selectionVariant: 'single',
    anchorSide: undefined,
    height: 'auto',
    overlayMaxHeight: undefined,
    width: 'auto',
  },
  argTypes: {
    // Autocomplete.Menu
    emptyStateText: {
      control: {type: 'text'},
      table: {
        category: 'Autocomplete.Menu',
      },
    },
    menuLoading: {
      name: 'loading',
      control: {type: 'boolean'},
      table: {
        category: 'Autocomplete.Menu',
      },
    },
    selectionVariant: {
      control: {
        type: 'radio',
      },
      options: ['single', 'multiple'],
      table: {
        category: 'Autocomplete.Menu',
      },
    },

    // Autocomplete.Overlay
    anchorSide: {
      control: {
        type: 'select',
      },
      options: [
        'inside-top',
        'inside-bottom',
        'inside-left',
        'inside-right',
        'inside-center',
        'outside-top',
        'outside-bottom',
        'outside-left',
        'outside-right',
      ],
      table: {
        category: 'Autocomplete.Overlay',
      },
    },
    height: {
      control: {
        type: 'select',
      },
      options: ['auto', 'initial', 'small', 'medium', 'large', 'xlarge', 'xsmall'],
      table: {
        category: 'Autocomplete.Overlay',
      },
    },
    // needs a key other than 'maxHeight' because TextInputWithTokens also has a maxHeight prop
    overlayMaxHeight: {
      name: 'maxHeight',
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large', 'xlarge', 'xsmall', undefined],
      table: {
        category: 'Autocomplete.Overlay',
      },
    },
    width: {
      control: {
        type: 'select',
      },
      options: ['auto', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      table: {
        category: 'Autocomplete.Overlay',
      },
    },
    ...getTextInputArgTypes('TextInput props'),
    ...formControlArgTypes,
  },
} as Meta

export const WithTokenInput = () => {
  const [tokens, setTokens] = useState<Datum[]>([])
  const selectedTokenIds = tokens.map(token => token.id)
  const [selectedItemIds, setSelectedItemIds] = useState<Array<string>>(selectedTokenIds)
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId))
    setSelectedItemIds(selectedItemIds.filter(id => id !== tokenId))
  }
  const onSelectedChange = (newlySelectedItems: Datum | Datum[]) => {
    if (!Array.isArray(newlySelectedItems)) {
      return
    }

    setSelectedItemIds(newlySelectedItems.map(item => item.id))

    if (newlySelectedItems.length < selectedItemIds.length) {
      const newlySelectedItemIds = newlySelectedItems.map(({id}) => id)
      const removedItemIds = selectedTokenIds.filter(id => !newlySelectedItemIds.includes(id))

      for (const removedItemId of removedItemIds) {
        onTokenRemove(removedItemId)
      }

      return
    }

    setTokens(newlySelectedItems.map(({id, text}) => ({id, text})))
  }

  return (
    <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input as={TextInputTokens} tokens={tokens} onTokenRemove={onTokenRemove} block />
          <Autocomplete.Overlay>
            <Autocomplete.Menu
              items={items}
              selectedItemIds={selectedItemIds}
              onSelectedChange={onSelectedChange}
              selectionVariant="multiple"
              aria-labelledby="autocompleteLabel"
            />
          </Autocomplete.Overlay>
        </Autocomplete>
      </FormControl>
    </form>
  )
}

export default autocompleteStoryMeta
