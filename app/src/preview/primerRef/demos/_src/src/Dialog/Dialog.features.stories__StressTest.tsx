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

const lipsum = (
  <>
    <Text className={classes.SmallParagraphText} as="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin mauris maximus elit sagittis, nec
      lobortis ligula elementum. Nam iaculis, urna nec lobortis posuere, eros urna venenatis eros, vel accumsan turpis
      nunc vitae enim. Maecenas et lorem lectus. Vivamus iaculis tortor eget ante placerat, nec posuere nisl tincidunt.
      Cras condimentum ante in accumsan ultricies. Morbi quis porta est, sit amet congue augue. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Ut consequat nunc id quam tempus, id tincidunt neque venenatis. Mauris
      fringilla tempor est, vitae fermentum enim elementum vitae. Nullam eleifend odio ut porta efficitur. Phasellus
      luctus tempus posuere.
    </Text>

    <Text className={classes.SmallParagraphText} as="p">
      Curabitur scelerisque bibendum faucibus. Duis rhoncus nunc est, at pharetra eros tristique a. Nam sodales turpis
      lectus, quis faucibus felis fermentum in. Curabitur vel velit vel eros laoreet pharetra. Aenean in facilisis
      sapien, eu porttitor ex. Donec ultrices ac arcu ut lobortis. Pellentesque vitae rutrum orci. Etiam pretium et enim
      sit amet scelerisque. Nulla sed odio nec lorem dapibus condimentum at sagittis quam. Sed in ornare ex, sed luctus
      sem. Mauris a est tellus.
    </Text>

    <Text className={classes.SmallParagraphText} as="p">
      Sed fringilla est ac urna aliquet, eget condimentum felis vulputate. Sed sagittis eros non mauris sodales
      molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ante leo,
      condimentum sed lectus non, rutrum octopodes urna. Mauris neque ante, interdum molestie tellus pharetra, eleifend
      dapibus justo. Sed at diam ligula. Donec dapibus ipsum quis elit euismod, sed suscipit eros euismod. Aliquam
      pretium felis quis risus luctus fringilla. Ut purus lacus, mattis a turpis eget, sollicitudin pellentesque neque.
    </Text>

    <Text className={classes.SmallParagraphText} as="p">
      Nunc sodales quis ante quis porttitor. Vestibulum ornare lacinia ante. Donec a nisi nec arcu aliquam pretium in
      nec nunc. Donec fringilla erat vitae viverra feugiat. Sed non odio vel ipsum porttitor maximus. Donec id eleifend
      lectus. Proin varius felis sit amet neque eleifend, vitae porttitor ligula commodo.
    </Text>

    <Text className={classes.SmallParagraphText} as="p">
      Vivamus felis quam, porttitor a justo sit amet, placerat ultricies nisl. Suspendisse potenti. Maecenas non
      consequat lorem, eu porta ante. Pellentesque elementum diam sapien, nec ultrices risus convallis eget. Nam
      pharetra dolor at dictum tempor. Quisque ut est a ligula hendrerit sodales. Curabitur ornare a nulla in laoreet.
      Maecenas semper mi egestas, dignissim nisi et, elementum neque.
    </Text>
  </>
)

export const StressTest = ({width, height, subtitle}: DialogStoryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const onDialogClose = useCallback(() => setIsOpen(false), [])
  const onSecondDialogClose = useCallback(() => setSecondOpen(false), [])
  const openSecondDialog = useCallback(() => setSecondOpen(true), [])
  const manyButtons = new Array(7).fill(undefined).map((_, i) => ({content: `Button ${i}`}))
  return (
    <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      {isOpen && (
        <Dialog
          title="This dialog has a really long title. So long, in fact, that it should cause wrapping, going to multiple lines!."
          subtitle={
            subtitle
              ? "It's not a common scenario, sure, but what if the subtitle is generated from a really long value? Do we just break the dialog? Or do we handle it because we are pros?"
              : undefined
          }
          onClose={onDialogClose}
          width={width}
          height={height}
          footerButtons={[
            ...manyButtons,
            {buttonType: 'danger', content: 'Delete the universe', onClick: onDialogClose},
            {buttonType: 'primary', content: 'Proceed', onClick: openSecondDialog},
          ]}
          position={{narrow: 'fullscreen', regular: 'center'}}
        >
          {lipsum}
          {secondOpen && (
            <Dialog title="Inner dialog!" onClose={onSecondDialogClose} width="small">
              Hello world
            </Dialog>
          )}
        </Dialog>
      )}
    </>
  )
}
