// @ts-nocheck
import { CounterLabel } from '@primer/react';


export default {
  title: 'Components/CounterLabel/Features',
  component: CounterLabel,
} as Meta<typeof CounterLabel>

export const PrimaryTheme: StoryFn<typeof CounterLabel> = () => <CounterLabel variant="primary">12</CounterLabel>
