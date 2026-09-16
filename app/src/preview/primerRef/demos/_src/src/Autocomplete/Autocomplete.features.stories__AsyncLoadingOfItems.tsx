// @ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react'
import { BaseStyles } from '@primer/react';
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

const getArgsByChildComponent = ({
  // Autocomplete.Menu
  emptyStateText,
  menuLoading,
  selectionVariant,

  // Autocomplete.Overlay
  anchorSide,
  height,
  overlayMaxHeight,
  width,

  // TextInput
  block,
  contrast,
  disabled,
  inputSize,
  loading,
  loaderPosition,
  placeholder,
  validationStatus,

  // TextInputWithTokens
  hideTokenRemoveButtons,
  maxHeight: textInputWithTokensMaxHeight,
  preventTokenWrapping,
  size: tokenSize,
  visibleTokenCount,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const textInputArgs = {
    block,
    contrast,
    disabled,
    inputSize,
    loading,
    loaderPosition,
    placeholder,
    validationStatus,
  }
  return {
    menuArgs: {emptyStateText, loading: menuLoading, selectionVariant},
    overlayArgs: {anchorSide, height, maxHeight: overlayMaxHeight, width},
    textInputArgs,
    textInputWithTokensArgs: {
      hideTokenRemoveButtons,
      maxHeight: textInputWithTokensMaxHeight,
      preventTokenWrapping,
      size: tokenSize,
      visibleTokenCount,
      ...textInputArgs,
      // ...formControlArgTypes
    },
  }
}

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

export const AsyncLoadingOfItems = (args: FormControlArgs<AutocompleteArgs>) => {
  const {parentArgs, labelArgs, captionArgs, validationArgs} = getFormControlArgsByChildComponent(args)
  const {menuArgs, overlayArgs, textInputArgs} = getArgsByChildComponent(args)
  const [loadedItems, setLoadedItems] = useState<Datum[]>([])
  const onOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setTimeout(() => {
        setLoadedItems(items)
      }, 1500)
    }
  }

  return (
    <form className={classes.FormPadding}>
      <FormControl {...parentArgs}>
        <FormControl.Label id="autocompleteLabel" {...labelArgs} />
        <Autocomplete>
          <Autocomplete.Input {...textInputArgs} size={textInputArgs.inputSize} />
          <Autocomplete.Overlay {...overlayArgs}>
            <Autocomplete.Menu
              items={loadedItems}
              selectedItemIds={[]}
              onOpenChange={onOpenChange}
              aria-labelledby="autocompleteLabel"
              {...menuArgs}
              loading={loadedItems.length === 0}
            />
          </Autocomplete.Overlay>
        </Autocomplete>
        {captionArgs.children && <FormControl.Caption {...captionArgs} />}
        {validationArgs.children && validationArgs.variant && (
          <FormControl.Validation {...validationArgs} variant={validationArgs.variant} />
        )}
      </FormControl>
    </form>
  )
}
AsyncLoadingOfItems.parameters = {controls: {exclude: [...excludedControlKeys, 'loading']}}

export default autocompleteStoryMeta
