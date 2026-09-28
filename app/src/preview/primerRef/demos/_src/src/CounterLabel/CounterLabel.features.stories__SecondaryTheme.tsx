// @ts-nocheck
import { CounterLabel } from '@primer/react';


export default {
  title: 'Components/CounterLabel/Features',
  component: CounterLabel,
} as Meta<typeof CounterLabel>

export const SecondaryTheme: StoryFn<typeof CounterLabel> = () => <CounterLabel variant="secondary">12</CounterLabel>
