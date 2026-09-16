// @ts-nocheck
import { Heading } from '@primer/react';


export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta<typeof Heading>

export const Default: StoryFn<typeof Heading> = () => <Heading>Default H2 Heading</Heading>
