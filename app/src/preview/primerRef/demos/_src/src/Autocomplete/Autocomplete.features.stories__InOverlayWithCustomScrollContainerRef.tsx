// @ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react'
import { BaseStyles } from '@primer/react';
import { Autocomplete } from '@primer/react';
import { AnchoredOverlay } from '@primer/react';
import { Button } from '@primer/react';
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

export const InOverlayWithCustomScrollContainerRef = () => {
  const scrollContainerRef = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Datum>()

  const handleOpen = () => {
    setIsOpen(true)
    inputRef.current && inputRef.current.focus()
  }

  const selectChange = (item: Datum[] | Datum) => {
    setIsOpen(false)

    if (Array.isArray(item) && item.length) setSelectedItem(item[0])

    triggerRef.current?.focus()
  }

  return (
    <form className={classes.FormPadding}>
      <span id="selected-item-status">Selected item: {selectedItem ? selectedItem.text : 'none'}</span>

      <AnchoredOverlay
        open={isOpen}
        onOpen={handleOpen}
        onClose={() => setIsOpen(false)}
        width="large"
        focusTrapSettings={{initialFocusRef: inputRef}}
        side="inside-top"
        anchorRef={triggerRef}
        renderAnchor={props => (
          <Button {...props} aria-describedby="selected-item-status">
            open overlay
          </Button>
        )}
        preventOverflow={false}
      >
        <Autocomplete>
          <div className={classes.OverlayFlexCol}>
            <div className={classes.OverlayInputBar}>
              <Autocomplete.Input ref={inputRef} className={classes.OverlayInput} block aria-label="Search" />
            </div>
            <div ref={scrollContainerRef as RefObject<HTMLDivElement>} className={classes.OverlayScroll}>
              <Autocomplete.Menu
                items={items}
                selectedItemIds={[]}
                customScrollContainerRef={scrollContainerRef}
                aria-labelledby="autocompleteLabel"
                onSelectedChange={selectChange}
              />
            </div>
          </div>
        </Autocomplete>
      </AnchoredOverlay>
    </form>
  )
}

export default autocompleteStoryMeta
