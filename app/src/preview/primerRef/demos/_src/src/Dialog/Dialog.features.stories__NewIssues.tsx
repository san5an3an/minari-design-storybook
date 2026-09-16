// @ts-nocheck
import React, {useState, useRef, useCallback} from 'react'
import { Button } from '@primer/react';
import { ActionList } from '@primer/react';
import { Dialog } from '@primer/react';


/* Dialog Version 2 */

export default {
  title: 'Components/Dialog/Features',
}

export const NewIssues = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onDialogClose = useCallback(() => setIsOpen(false), [])
  const initialFocusRef = useRef(null)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show dialog</Button>
      {isOpen ? (
        <Dialog
          initialFocusRef={initialFocusRef}
          onClose={onDialogClose}
          title="New issue"
          renderBody={() => (
            <ActionList>
              <ActionList.LinkItem ref={initialFocusRef} href="https://github.com">
                Item 1
              </ActionList.LinkItem>
              <ActionList.LinkItem href="https://github.com">Link</ActionList.LinkItem>
            </ActionList>
          )}
        ></Dialog>
      ) : null}
    </>
  )
}
