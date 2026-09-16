// @ts-nocheck
import {useState, useCallback} from 'react'
import { Button } from '@primer/react';
import { ConfirmationDialog } from '@primer/react';
import classes from './ConfirmationDialog.features.stories.module.css'


export default {
  title: 'Components/ConfirmationDialog/Features',
  component: ConfirmationDialog,
} as Meta<typeof ConfirmationDialog>

export const LoadingStates = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isConfirmLoading, setIsConfirmLoading] = useState(false)
  const [isCancelLoading, setIsCancelLoading] = useState(false)

  const handleConfirm = useCallback(() => {
    setIsConfirmLoading(true)
    // Simulate async operation
    setTimeout(() => {
      setIsConfirmLoading(false)
      setIsOpen(false)
    }, 2000)
  }, [])

  const handleCancel = useCallback(() => {
    setIsCancelLoading(true)
    // Simulate async operation
    setTimeout(() => {
      setIsCancelLoading(false)
      setIsOpen(false)
    }, 1500)
  }, [])

  const handleClose = useCallback(
    (gesture: 'confirm' | 'close-button' | 'cancel' | 'escape') => {
      if (gesture === 'confirm') {
        handleConfirm()
      } else if (gesture === 'cancel') {
        handleCancel()
      } else {
        setIsOpen(false)
      }
    },
    [handleConfirm, handleCancel],
  )

  return (
    <div className={classes.ButtonContainer}>
      <Button onClick={() => setIsOpen(true)}>Show Loading Dialog</Button>
      {isOpen && (
        <ConfirmationDialog
          title="Delete this file?"
          confirmButtonType="danger"
          confirmButtonContent="Delete"
          confirmButtonLoading={isConfirmLoading}
          cancelButtonLoading={isCancelLoading}
          onClose={handleClose}
        >
          This action cannot be undone. The file will be permanently deleted from your repository.
        </ConfirmationDialog>
      )}
    </div>
  )
}
