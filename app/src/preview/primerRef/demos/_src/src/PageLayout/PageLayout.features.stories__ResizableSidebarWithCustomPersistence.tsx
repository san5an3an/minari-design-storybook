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

export const ResizableSidebarWithCustomPersistence: StoryFn = () => {
  const key = 'page-layout-features-stories-custom-persistence-sidebar-width'

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
    <PageLayout containerWidth="full">
      <PageLayout.Sidebar
        resizable
        position="start"
        currentWidth={currentWidth}
        onResizeEnd={handleWidthChange}
        aria-label="Resizable sidebar (custom persistence)"
        style={{height: 'auto'}}
        width={{min: '200px', default: `${defaultPaneWidth.medium}px`, max: '600px'}}
      >
        <Placeholder height="100%" label={`Sidebar (width: ${currentWidth}px)`} />
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
ResizableSidebarWithCustomPersistence.storyName = 'Resizable sidebar with custom persistence'
