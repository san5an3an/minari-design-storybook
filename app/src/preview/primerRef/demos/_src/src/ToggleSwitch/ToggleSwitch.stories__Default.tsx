// @ts-nocheck
import { ToggleSwitch } from '@primer/react';
import { Text } from '@primer/react';
import ToggleSwitchStoryWrapper from './ToggleSwitchStoryWrapper'
import classes from './ToggleSwitch.stories.module.css'


export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  decorators: [
    Story => {
      return <ToggleSwitchStoryWrapper>{Story()}</ToggleSwitchStoryWrapper>
    },
  ],
} as Meta<ComponentProps<typeof ToggleSwitch>>

export const Default = () => (
  <>
    <Text id="toggle" className={classes.TextMediumBold}>
      Toggle label
    </Text>
    <ToggleSwitch aria-labelledby="toggle" />
  </>
)
