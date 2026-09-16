// @ts-nocheck
import React from 'react'
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import { defaultPaneWidth } from '@primer/react';


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const ResizablePaneWithNumberWidth: StoryFn = () => {
  const key = 'page-layout-features-stories-number-width'

  // Read initial width from localStorage (CSR only), falling back to medium preset
  const getInitialWidth = (): number => {
    if (typeof window !== 'undefined') {
      const storedWidth = localStorage.getItem(key)
      if (storedWidth !== null) {
        const parsed = parseInt(storedWidth, 10)
        if (!isNaN(parsed) && parsed > 0) {
          return parsed
        }
      }
    }
    return defaultPaneWidth.medium
  }

  const [currentWidth, setCurrentWidth] = React.useState<number>(getInitialWidth)

  const handleWidthChange = (newWidth: number) => {
    setCurrentWidth(newWidth)
    localStorage.setItem(key, newWidth.toString())
  }

  return (
    <PageLayout>
      <PageLayout.Header>
        <Placeholder height={64} label="Header" />
      </PageLayout.Header>
      <PageLayout.Pane
        width="medium"
        resizable
        currentWidth={currentWidth}
        onResizeEnd={handleWidthChange}
        aria-label="Side pane"
      >
        <Placeholder height={320} label={`Pane (width: ${currentWidth}px)`} />
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
ResizablePaneWithNumberWidth.storyName = 'Resizable pane with number width'
