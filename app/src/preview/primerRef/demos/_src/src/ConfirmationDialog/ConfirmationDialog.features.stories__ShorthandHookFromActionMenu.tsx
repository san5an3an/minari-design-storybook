// @ts-nocheck
import {useState, useCallback} from 'react'
import { ActionMenu } from '@primer/react';
import { ActionList } from '@primer/react';
import { ConfirmationDialog } from '@primer/react';
import { useConfirm } from '@primer/react';
import classes from './ConfirmationDialog.features.stories.module.css'


export default {
  title: 'Components/ConfirmationDialog/Features',
  component: ConfirmationDialog,
} as Meta<typeof ConfirmationDialog>

export const ShorthandHookFromActionMenu = () => {
  const confirm = useConfirm()
  const [text, setText] = useState('open me')
  const onButtonClick = useCallback(async () => {
    if (await confirm({title: 'Are you sure?', content: 'Do you really want to do a trick?'})) {
      setText('tada!')
    }
  }, [confirm])

  return (
    <div className={classes.ButtonContainer}>
      <ActionMenu>
        <ActionMenu.Button>{text}</ActionMenu.Button>
        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item onSelect={onButtonClick}>Do a trick!</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  )
}
