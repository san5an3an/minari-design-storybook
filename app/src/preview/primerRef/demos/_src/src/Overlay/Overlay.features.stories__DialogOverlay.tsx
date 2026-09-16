// @ts-nocheck
import React, {useState, useRef, useCallback} from 'react'
import { Overlay } from '@primer/react';
import { Button } from '@primer/react';
import { Text } from '@primer/react';
import { useFocusTrap } from '@primer/react';
import classes from './Overlay.features.stories.module.css'


export default {
  title: 'Private/Components/Overlay/Features',
  component: Overlay,
  args: {
    anchorSide: 'inside-top',
    role: 'dialog',
    open: false,
  },
  argTypes: {
    anchorSide: {
      control: {
        type: 'radio',
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
    },
    role: {
      type: 'string',
    },
    open: {
      control: false,
      visible: false,
    },
  },
} as Meta

export const DialogOverlay = ({anchorSide, role, open}: Args) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const confirmButtonRef = useRef<HTMLButtonElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const closeOverlay = () => setIsOpen(false)
  useFocusTrap({containerRef, disabled: !isOpen, initialFocusRef: confirmButtonRef, returnFocusRef: buttonRef})

  return (
    <div ref={anchorRef}>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        open overlay
      </Button>
      {isOpen || open ? (
        <Overlay
          initialFocusRef={confirmButtonRef}
          returnFocusRef={buttonRef}
          ignoreClickRefs={[buttonRef]}
          onEscape={closeOverlay}
          onClickOutside={closeOverlay}
          width="small"
          anchorSide={anchorSide}
          role={role}
          aria-modal={role === 'dialog' ? 'true' : undefined}
          aria-label={role === 'dialog' ? 'Confirmation screen' : undefined}
          ref={containerRef}
        >
          <div className={classes.DialogContent}>
            <Text>Are you sure?</Text>
            <Button variant="danger" onClick={closeOverlay}>
              Cancel
            </Button>
            <Button onClick={closeOverlay} ref={confirmButtonRef}>
              Confirm
            </Button>
          </div>
        </Overlay>
      ) : null}
    </div>
  )
}
