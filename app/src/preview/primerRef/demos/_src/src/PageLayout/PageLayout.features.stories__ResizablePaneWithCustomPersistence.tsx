// @ts-nocheck
import React from 'react'
import { PageLayout } from '@primer/react';
import {Placeholder} from '../Placeholder'
import { useIsomorphicLayoutEffect } from '@primer/react';
import { defaultPaneWidth } from '@primer/react';


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const ResizablePaneWithCustomPersistence: StoryFn = () => {
  const key = 'page-layout-features-stories-custom-persistence-pane-width'

  // Read initial width from localStorage (CSR only), falling back to medium preset
  const getInitialWidth = (): number => {
    if (typeof window !== 'undefined') {
      const storedWidth = localStorage.getItem(key)
      if (storedWidth !== null) {
        const parsed = parseFloat(storedWidth)
        if (!isNaN(parsed) && parsed > 0) {
          return parsed
        }
      }
    }
    return defaultPaneWidth.medium
  }

  const [currentWidth, setCurrentWidth] = React.useState<number>(getInitialWidth)
  useIsomorphicLayoutEffect(() => {
    setCurrentWidth(getInitialWidth())
  }, [])

  const handleWidthChange = (width: number) => {
    setCurrentWidth(width)
    localStorage.setItem(key, width.toString())
  }

  return (
    <PageLayout>
      <PageLayout.Header>
        <Placeholder height={64} label="Header" />
      </PageLayout.Header>
      <PageLayout.Pane
        width={{min: '256px', default: `${defaultPaneWidth.medium}px`, max: '600px'}}
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
ResizablePaneWithCustomPersistence.storyName = 'Resizable pane with custom persistence'
