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

export const AsyncSuccess: StoryFn = args => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [asyncItems, setAsyncItems] = React.useState<string[]>([])

  let state: SubTreeState = 'initial'

  if (isLoading) {
    state = 'loading'
  } else if (asyncItems.length > 0) {
    state = 'done'
  }

  return (
    <nav aria-label="Files">
      <TreeView aria-label="Files">
        <TreeView.Item id="file-1">
          <TreeView.LeadingVisual>
            <FileIcon />
          </TreeView.LeadingVisual>
          Some file
        </TreeView.Item>
        <TreeView.Item
          id="async-directory"
          onExpandedChange={async isExpanded => {
            if (asyncItems.length === 0 && isExpanded) {
              setIsLoading(true)

              // Load items
              const items = await loadItems(args.responseTime)

              setIsLoading(false)
              setAsyncItems(items)
            }
          }}
        >
          <TreeView.LeadingVisual>
            <TreeView.DirectoryIcon />
          </TreeView.LeadingVisual>
          Directory with async items
          <TreeView.SubTree state={state}>
            {asyncItems.map(item => (
              <TreeView.Item id={`item-${item}`} key={item}>
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
    </nav>
  )
}

AsyncSuccess.args = {
  responseTime: 4000,
}

export default meta
