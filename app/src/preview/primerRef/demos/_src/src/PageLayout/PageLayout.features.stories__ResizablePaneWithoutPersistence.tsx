// @ts-nocheck
import React from 'react'
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import { defaultPaneWidth } from '@primer/react';


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>
export const ResizablePaneWithoutPersistence: StoryFn = () => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(defaultPaneWidth.medium)

  return (
    <PageLayout>
      <PageLayout.Header>
        <Placeholder height={64} label="Header" />
      </PageLayout.Header>
      <PageLayout.Pane resizable currentWidth={currentWidth} onResizeEnd={setCurrentWidth} aria-label="Side pane">
        <Placeholder height={320} label={`Pane (resizable, not persisted, width: ${currentWidth}px)`} />
      </PageLayout.Pane>
      <PageLayout.Content>
        <Placeholder height={640} label="Content" />
      </PageLayout.Content>
      <PageLayout.Footer>
        <Placeholder height={64} label="Footer" />
      </PageLayout.Footer>
    </PageLayout>
  )
}
ResizablePaneWithoutPersistence.storyName = 'Resizable pane without persistence'
