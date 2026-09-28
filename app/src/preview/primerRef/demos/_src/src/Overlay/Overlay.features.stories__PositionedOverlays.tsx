// @ts-nocheck
import React, {useState, useRef, useCallback} from 'react'
import {TriangleDownIcon, PlusIcon, IssueDraftIcon, XIcon} from '@primer/octicons-react'
import { Overlay } from '@primer/react';
import { Button, IconButton } from '@primer/react';
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

export const PositionedOverlays = ({right, role, open}: Args) => {
  const [isOpen, setIsOpen] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>(right ? 'right' : 'left')
  const buttonRef = useRef<HTMLButtonElement>(null)
  const confirmButtonRef = useRef<HTMLButtonElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const closeOverlay = () => setIsOpen(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useFocusTrap({
    containerRef,
    disabled: !isOpen,
  })

  return (
    <div ref={anchorRef}>
      <Button
        ref={buttonRef}
        onClick={() => {
          setIsOpen(!isOpen)
          setDirection('left')
        }}
      >
        Open left overlay
      </Button>
      <Button
        ref={buttonRef}
        onClick={() => {
          setIsOpen(!isOpen)
          setDirection('right')
        }}
        style={{
          marginTop: '8px',
        }}
      >
        Open right overlay
      </Button>
      {isOpen || open ? (
        direction === 'left' ? (
          <Overlay
            initialFocusRef={confirmButtonRef}
            returnFocusRef={buttonRef}
            ignoreClickRefs={[buttonRef]}
            onEscape={closeOverlay}
            onClickOutside={closeOverlay}
            width="auto"
            anchorSide="inside-right"
            role={role}
            aria-modal={role === 'dialog' ? 'true' : undefined}
            aria-label={role === 'dialog' ? 'Left aligned overlay' : undefined}
            ref={containerRef}
          >
            <div className={classes.ResponsiveWidthContainer}>
              <div className={classes.OverlayFullHeight}>
                <IconButton
                  aria-label="Close"
                  onClick={closeOverlay}
                  icon={XIcon}
                  variant="invisible"
                  className={classes.CloseButtonLeft}
                />
                <Text>Look! left aligned</Text>
              </div>
            </div>
          </Overlay>
        ) : (
          <Overlay
            initialFocusRef={confirmButtonRef}
            returnFocusRef={buttonRef}
            ignoreClickRefs={[buttonRef]}
            onEscape={closeOverlay}
            onClickOutside={closeOverlay}
            width="auto"
            anchorSide={'inside-left'}
            right={0}
            position="fixed"
            role={role}
            aria-modal={role === 'dialog' ? 'true' : undefined}
            aria-label={role === 'dialog' ? 'Right aligned overlay' : undefined}
            ref={containerRef}
          >
            <div className={classes.ResponsiveWidthContainer}>
              <div className={classes.OverlayFullHeight}>
                <IconButton
                  aria-label="Close"
                  onClick={closeOverlay}
                  icon={XIcon}
                  variant="invisible"
                  className={classes.CloseButtonRight}
                />
                <Text>Look! right aligned</Text>
              </div>
            </div>
          </Overlay>
        )
      ) : null}
    </div>
  )
}
