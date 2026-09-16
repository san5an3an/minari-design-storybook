// @ts-nocheck
import {
  DiffAddedIcon,
  DiffModifiedIcon,
  DiffRemovedIcon,
  DiffRenamedIcon,
  FileIcon,
  KebabHorizontalIcon,
} from '@primer/octicons-react'
import React from 'react'
import { TreeView } from '@primer/react';
import classes from './TreeView.features.stories.module.css'


const meta: Meta = {
  title: 'Components/TreeView/Features',
  component: TreeView,
  decorators: [
    Story => {
      return (
        // Prevent TreeView from expanding to the full width of the screen
        <div className={classes.StorybookDecorator}>
          <Story />
        </div>
      )
    },
  ],
}

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function loadItems(responseTime: number) {
  await wait(responseTime)
  return ['Avatar.tsx', 'Button.tsx', 'Checkbox.tsx']
}

async function alwaysFails(responseTime: number) {
  await wait(responseTime)
  throw new Error('Failed to load items')
  return []
}

export const AsyncError: StoryFn = args => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [asyncItems, setAsyncItems] = React.useState<string[]>([])
  const [error, setError] = React.useState<Error | null>(null)

  let state: SubTreeState = 'initial'

  if (isLoading) {
    state = 'loading'
  } else if (error) {
    state = 'error'
  } else if (asyncItems.length > 0) {
    state = 'done'
  }

  async function loadItems() {
    if (asyncItems.length === 0) {
      setIsLoading(true)

      try {
        // Try to load items
        const items = await alwaysFails(args.responseTime)
        setAsyncItems(items)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <TreeView aria-label="Files">
      <TreeView.Item id="some-file">
        <TreeView.LeadingVisual>
          <FileIcon />
        </TreeView.LeadingVisual>
        Some file
      </TreeView.Item>
      <TreeView.Item
        id="async-directory"
        onExpandedChange={isExpanded => {
          if (isExpanded) {
            loadItems()
          }
        }}
      >
        <TreeView.LeadingVisual>
          <TreeView.DirectoryIcon />
        </TreeView.LeadingVisual>
        Directory with async items
        <TreeView.SubTree state={state}>
          {error ? (
            <TreeView.ErrorDialog
              onRetry={() => {
                setError(null)
                loadItems()
              }}
              onDismiss={() => {
                setError(null)
              }}
            >
              {error.message}
            </TreeView.ErrorDialog>
          ) : null}
          {asyncItems.map(item => (
            <TreeView.Item key={item} id={`item-${item}`}>
              <TreeView.LeadingVisual>
                <FileIcon />
              </TreeView.LeadingVisual>
              {item}
            </TreeView.Item>
          ))}
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="another-file">
        <TreeView.LeadingVisual>
          <FileIcon />
        </TreeView.LeadingVisual>
        Another file
      </TreeView.Item>
    </TreeView>
  )
}

AsyncError.args = {
  responseTime: 2000,
}

export default meta
