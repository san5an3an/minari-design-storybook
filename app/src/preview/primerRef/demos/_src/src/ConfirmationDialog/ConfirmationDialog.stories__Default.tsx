// @ts-nocheck
import {useCallback, useRef, useState} from 'react'
import { Button } from '@primer/react';
import { ConfirmationDialog } from '@primer/react';


export default {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
} as Meta

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const onDialogClose = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      {isOpen && (
        <ConfirmationDialog
          title="Delete universe?"
          onClose={onDialogClose}
          confirmButtonContent="Delete it!"
          confirmButtonType="danger"
        >
          Deleting the universe could have disastrous effects, including but not limited to destroying all life on
          Earth.
        </ConfirmationDialog>
      )}
    </>
  )
}
