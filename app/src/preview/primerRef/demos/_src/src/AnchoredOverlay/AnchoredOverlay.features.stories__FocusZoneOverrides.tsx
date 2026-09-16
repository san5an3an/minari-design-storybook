// @ts-nocheck
import {useEffect, useRef, useState, type JSX} from 'react'
import {FocusKeys} from '@primer/behaviors'
import { AnchoredOverlay } from '@primer/react';
import { Button } from '@primer/react';
import classes from './AnchoredOverlay.features.stories.module.css'


export default {
  title: 'Components/AnchoredOverlay/Features',
  component: AnchoredOverlay,
} as Meta

export const FocusZoneOverrides = () => {
  const [open, setOpen] = useState(false)

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderAnchor={props => <Button {...props}>Button</Button>}
      focusZoneSettings={{bindKeys: FocusKeys.JK}}
      overlayProps={{
        role: 'dialog',
        'aria-modal': true,
        'aria-label': 'Focus Zone Demo Overlay',
        className: classes.Overlay,
      }}
      preventOverflow={false}
    >
      <p>
        Use <kbd>J</kbd> and <kbd>K</kbd> keys to move focus.
      </p>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </AnchoredOverlay>
  )
}
