// @ts-nocheck
import { KeybindingHint } from '@primer/react/experimental';
import classes from './KeybindingHint.features.stories.module.css'


export default {
  title: 'Experimental/Components/KeybindingHint/Features',
  component: KeybindingHint,
} satisfies Meta<typeof KeybindingHint>

const chord = 'Mod+Shift+K'

export const OnPrimary: StoryObj<KeybindingHintProps> = {
  render: args => (
    <div className={classes.PrimaryBackground}>
      <KeybindingHint {...args} />
    </div>
  ),
  args: {keys: chord, variant: 'onPrimary'},
}
