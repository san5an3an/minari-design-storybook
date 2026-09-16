// @ts-nocheck
import { ToggleSwitch } from '@primer/react';
import styles from './ToggleSwitch.features.stories.module.css'


export default {
  title: 'Components/ToggleSwitch/Features',
}

export const WithCaption = () => (
  <div className={styles.Row}>
    <div className={styles.ColGrow}>
      <span className={styles.SwitchLabel} id="switchLabel">
        Notifications
      </span>
      <span className={styles.SwitchCaption} id="switchCaption">
        Notifications will be delivered via email and the GitHub notification center
      </span>
    </div>
    <ToggleSwitch aria-labelledby="switchLabel" aria-describedby="switchCaption" />
  </div>
)
