// @ts-nocheck
import { ToggleSwitch } from '@primer/react';
import ToggleSwitchStoryWrapper from './ToggleSwitchStoryWrapper'
import styles from './ToggleSwitch.features.stories.module.css'


export default {
  title: 'Components/ToggleSwitch/Features',
}

export const WithCustomLabels = () => (
  <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch buttonLabelOn="Active" buttonLabelOff="Inactive" aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>
)
