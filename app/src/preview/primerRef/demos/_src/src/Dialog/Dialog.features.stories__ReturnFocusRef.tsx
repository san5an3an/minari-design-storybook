// @ts-nocheck
import React, {useState, useRef, useCallback} from 'react'
import { Button } from '@primer/react';
import { Dialog } from '@primer/react';


/* Dialog Version 2 */

export default {
  title: 'Components/Dialog/Features',
}

export const ReturnFocusRef = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onDialogClose = useCallback(() => setIsOpen(false), [])

  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const triggerButton = (
    <Button ref={triggerRef} variant="primary" onClick={() => setIsOpen(true)}>
      Show dialog
    </Button>
  )

  if (!isOpen) return triggerButton

  return (
    <React.Suspense fallback={<Button>Show Dialog</Button>}>
      {triggerButton}
      <Dialog title="title" onClose={onDialogClose} returnFocusRef={triggerRef}>
        body
      </Dialog>
    </React.Suspense>
  )
}
