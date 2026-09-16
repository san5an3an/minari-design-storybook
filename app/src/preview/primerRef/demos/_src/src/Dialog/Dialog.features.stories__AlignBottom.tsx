// @ts-nocheck
import React, {useState, useRef, useCallback} from 'react'
import { Text } from '@primer/react';
import { Button } from '@primer/react';
import { Dialog } from '@primer/react';
import classes from './Dialog.stories.module.css'


/* Dialog Version 2 */

export default {
  title: 'Components/Dialog/Features',
}

const bodyContent = (
  <Text className={classes.SmallParagraphText} as="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin mauris maximus elit sagittis, nec
    lobortis ligula elementum. Nam iaculis, urna nec lobortis posuere, eros urna venenatis eros, vel accumsan turpis
    nunc vitae enim. Maecenas et lorem lectus. Vivamus iaculis tortor eget ante placerat, nec posuere nisl tincidunt.
    Cras condimentum ante in accumsan ultricies. Morbi quis porta est, sit amet congue augue. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit. Ut consequat nunc id quam tempus, id tincidunt neque venenatis. Mauris fringilla
    tempor est, vitae fermentum enim elementum vitae. Nullam eleifend odio ut porta efficitur. Phasellus luctus tempus
    posuere.
  </Text>
)

export const AlignBottom = () => {
  const [isOpen, setIsOpen] = useState(true)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const onDialogClose = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <Button ref={buttonRef} onClick={() => setIsOpen(true)}>
        Show dialog
      </Button>
      {isOpen && (
        <Dialog title="My Dialog" onClose={onDialogClose} align="bottom">
          {bodyContent}
        </Dialog>
      )}
    </>
  )
}
AlignBottom.storyName = '[Align] Bottom'
