// @ts-nocheck
import { RelativeTime } from '@primer/react';


const meta: Meta = {
  title: 'Components/RelativeTime',
  component: RelativeTime,
  parameters: {
    layout: 'fullscreen',
    controls: {
      // StoryBook infers from type info of the component which includes CE Lifecycle,
      // SX props, and methods we want to otherwise ignore
      exclude: /^(getFormatted.*|datetime|as|theme|forwardedAs|.*Callback|update)$/g,
    },
  },
}

export const Default: StoryFn = () => <RelativeTime date={new Date('2020-01-01T00:00:00Z')} noTitle={true} />

export default meta
