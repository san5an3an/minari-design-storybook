// @ts-nocheck
import React, {useState} from 'react'
import { ToggleSwitch } from '@primer/react';
import {action} from 'storybook/actions'
import {clsx} from 'clsx'
import styles from './ToggleSwitch.features.stories.module.css'


export default {
  title: 'Components/ToggleSwitch/Features',
}

export const Controlled = () => {
  const [isOn, setIsOn] = React.useState(false)

  const onClick = React.useCallback(() => {
    setIsOn(!isOn)
  }, [setIsOn, isOn])

  const handleSwitchChange = (on: boolean) => {
    action(`new switch "on" state: ${on}`)
  }

  return (
    <>
      <div className={styles.Row} style={{maxWidth: '300px'}}>
        <span className={clsx(styles.ColGrow, styles.SwitchLabel)} id="switchLabel">
          Notifications
        </span>
        <ToggleSwitch onClick={onClick} onChange={handleSwitchChange} checked={isOn} aria-labelledby="switchLabel" />
      </div>
      <p>The switch is {isOn ? 'on' : 'off'}</p>
    </>
  )
}
