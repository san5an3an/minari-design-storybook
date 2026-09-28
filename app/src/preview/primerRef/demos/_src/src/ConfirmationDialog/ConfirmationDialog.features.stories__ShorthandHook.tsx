// @ts-nocheck
import {useState, useCallback} from 'react'
import { Button } from '@primer/react';
import { ConfirmationDialog } from '@primer/react';
import { useConfirm } from '@primer/react';
import classes from './ConfirmationDialog.features.stories.module.css'


export default {
  title: 'Components/ConfirmationDialog/Features',
  component: ConfirmationDialog,
} as Meta<typeof ConfirmationDialog>

export const ShorthandHook = () => {
  const confirm = useConfirm()
  const onButtonClick = useCallback(
    async (event: React.MouseEvent) => {
      if (
        (await confirm({title: 'Are you sure?', content: 'Do you really want to turn this button green?'})) &&
        event.target instanceof HTMLElement
      ) {
        event.target.style.color = 'var(--fgColor-success)'
        event.target.textContent = "I'm green!"
      }
    },
    [confirm],
  )
  return (
    <div className={classes.ButtonContainer}>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
    </div>
  )
}
