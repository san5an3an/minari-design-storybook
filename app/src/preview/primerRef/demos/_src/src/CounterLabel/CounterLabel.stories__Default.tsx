// @ts-nocheck
import { CounterLabel } from '@primer/react';


export default {
  title: 'Components/CounterLabel',
  component: CounterLabel,
} as Meta<typeof CounterLabel>

export const Default: StoryFn<typeof CounterLabel> = () => <CounterLabel>12</CounterLabel>
