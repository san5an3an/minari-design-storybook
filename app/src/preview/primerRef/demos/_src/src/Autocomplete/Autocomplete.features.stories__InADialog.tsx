// @ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react'
import { BaseStyles } from '@primer/react';
import { registerPortalRoot } from '@primer/react';
import { Dialog } from '@primer/react/deprecated';
import { Autocomplete } from '@primer/react';
import { FormControl } from '@primer/react';
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

export const InADialog = () => {
  const outerContainerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current, 'outerContainer')
      // eslint-disable-next-line react-you-might-not-need-an-effect/no-chain-state-updates
      setMounted(true)
    }
  }, [isDialogOpen])

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Show dialog</Button>
      <Dialog
        aria-label="Dialog with autocomplete"
        id="dialog-with-autocomplete"
        isOpen={isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
      >
        <div ref={outerContainerRef}>
          <form className={classes.FormPadding}>
            {mounted ? (
              <FormControl>
                <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
                <Autocomplete>
                  <Autocomplete.Input data-testid="autocompleteInput" />
                  <Autocomplete.Overlay portalContainerName="outerContainer">
                    <Autocomplete.Menu items={items} selectedItemIds={[]} aria-labelledby="autocompleteLabel" />
                  </Autocomplete.Overlay>
                </Autocomplete>
              </FormControl>
            ) : null}
          </form>
        </div>
      </Dialog>
      <p>
        The Autocomplete.Overlay is portalled to a div inside the Dialog to ensure it appears above the dialog in the
        stacking context.
      </p>
    </>
  )
}

export default autocompleteStoryMeta
