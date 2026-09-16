// @ts-nocheck
import React from 'react'
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const ResizableSidebarWithoutPersistence: StoryFn = () => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(300)

  return (
    <PageLayout containerWidth="full">
      <PageLayout.Sidebar
        resizable
        position="start"
        currentWidth={currentWidth}
        onResizeEnd={setCurrentWidth}
        aria-label="Resizable sidebar (controlled)"
        style={{height: 'auto'}}
        width={{min: '200px', default: '300px', max: '600px'}}
      >
        <Placeholder height="100%" label={`Sidebar (controlled, width: ${currentWidth}px)`} />
      </PageLayout.Sidebar>
      <PageLayout.Header>
        <Placeholder height={64} label="Header" />
      </PageLayout.Header>
      <PageLayout.Content>
        <Placeholder height={640} label="Content" />
      </PageLayout.Content>
      <PageLayout.Footer>
        <Placeholder height={64} label="Footer" />
      </PageLayout.Footer>
    </PageLayout>
  )
}
ResizableSidebarWithoutPersistence.storyName = 'Resizable sidebar without persistence'
