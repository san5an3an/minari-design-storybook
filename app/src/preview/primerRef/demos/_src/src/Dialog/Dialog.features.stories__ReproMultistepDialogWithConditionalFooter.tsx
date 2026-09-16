// @ts-nocheck
import React, {useState, useRef, useCallback} from 'react'
import { Stack } from '@primer/react';
import { TextInput } from '@primer/react';
import { Button } from '@primer/react';
import { Dialog } from '@primer/react';


/* Dialog Version 2 */

export default {
  title: 'Components/Dialog/Features',
}

// repro for https://github.com/github/primer/issues/2480
export const ReproMultistepDialogWithConditionalFooter = ({width, height}: DialogStoryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const onDialogClose = useCallback(() => setIsOpen(false), [])
  const [step, setStep] = React.useState(1)

  const [inputText, setInputText] = React.useState('')

  const dialogRef = useRef<HTMLDivElement>(null)

  const renderFooterConditionally = () => {
    if (step === 1) return null

    return (
      <Dialog.Footer>
        <Button variant="primary">Submit</Button>
      </Dialog.Footer>
    )
  }

  React.useEffect(() => {
    // focus the close button when the step changes
    const focusTarget = dialogRef.current?.querySelector('button[aria-label="Close"]') as HTMLButtonElement
    // eslint-disable-next-line react-you-might-not-need-an-effect/no-event-handler
    if (step === 2) {
      focusTarget.focus()
    }
  }, [step])

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Show dialog</Button>
      {isOpen && (
        <Dialog
          title={`Step ${step}`}
          width={width}
          height={height}
          renderFooter={renderFooterConditionally}
          onClose={onDialogClose}
          footerButtons={[{buttonType: 'primary', content: 'Proceed'}]}
          ref={dialogRef}
        >
          {step === 1 ? (
            <Stack gap="spacious" direction="vertical">
              <Stack direction="horizontal" justify="space-between">
                Bug Report <Button onClick={() => setStep(2)}>Choose</Button>
              </Stack>
              <Stack direction="horizontal" justify="space-between">
                Feature request <Button onClick={() => setStep(2)}>Choose</Button>
              </Stack>
            </Stack>
          ) : (
            <div>
              <Stack gap="condensed" direction="vertical">
                <label htmlFor="description">Description</label>
                <TextInput
                  id="description"
                  placeholder="Write the description here"
                  value={inputText}
                  onChange={event => setInputText(event.target.value)}
                />
              </Stack>
            </div>
          )}
        </Dialog>
      )}
    </>
  )
}
