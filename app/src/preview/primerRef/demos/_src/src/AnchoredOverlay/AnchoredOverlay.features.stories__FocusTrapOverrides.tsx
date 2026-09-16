// @ts-nocheck
import {useEffect, useRef, useState, type JSX} from 'react'
import { AnchoredOverlay } from '@primer/react';
import { Button } from '@primer/react';
import classes from './AnchoredOverlay.features.stories.module.css'


export default {
  title: 'Components/AnchoredOverlay/Features',
  component: AnchoredOverlay,
} as Meta

export const FocusTrapOverrides = () => {
  const initialFocusRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderAnchor={props => <Button {...props}>Button</Button>}
      focusTrapSettings={{initialFocusRef}}
      overlayProps={{
        role: 'dialog',
        'aria-modal': true,
        'aria-label': 'Focus Trap Demo Overlay',
        className: classes.Overlay,
      }}
      focusZoneSettings={{disabled: true}}
      preventOverflow={false}
    >
      <Button>First button</Button>
      <Button ref={initialFocusRef}>Initial focus</Button>
    </AnchoredOverlay>
  )
}
