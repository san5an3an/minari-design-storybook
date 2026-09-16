// @ts-nocheck
import React from 'react'
import { Button } from '@primer/react';
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

function expandAll(tree: TreeItem[]): TreeItem[] {
  return tree.map(item => ({
    data: {
      ...item.data,
      expanded: true,
    },
    children: expandAll(item.children),
  }))
}

function collapseAll(tree: TreeItem[]): TreeItem[] {
  return tree.map(item => ({
    data: {
      ...item.data,
      expanded: false,
    },
    children: collapseAll(item.children),
  }))
}

function setExpanded(tree: TreeItem[], path: string[], expanded: boolean): TreeItem[] {
  return tree.map(item => {
    if (item.data.name === path[0] && path.length === 1) {
      return {
        ...item,
        data: {
          ...item.data,
          expanded,
        },
      }
    } else if (item.data.name === path[0]) {
      return {
        ...item,
        children: setExpanded(item.children, path.slice(1), expanded),
      }
    } else {
      return item
    }
  })
}

const CurrentPathContext = React.createContext<{
  currentPath: string[]
  setCurrentPath: React.Dispatch<React.SetStateAction<string[]>>
}>({
  currentPath: [],
  setCurrentPath: () => {},
})

const initialTree: TreeItem[] = Array.from({length: 5}).map((_, i) => ({
  data: {
    name: `Item ${i}`,
    expanded: false,
  },
  children: Array.from({length: 5}).map((_, j) => ({
    data: {
      name: `Item ${i}.${j}`,
      expanded: false,
    },
    children: Array.from({length: 5}).map((_, k) => ({
      data: {
        name: `Item ${i}.${j}.${k}`,
        expanded: false,
      },
      children: [],
    })),
  })),
}))

export const Controlled: StoryFn = () => {
  const [currentPath, setCurrentPath] = React.useState<string[]>(['src', 'Avatar.tsx'])
  const [tree, setTree] = React.useState<TreeItem[]>(initialTree)

  return (
    <div className={classes.ControlledContainer}>
      <div className={classes.ButtonContainer}>
        <Button onClick={() => setTree(collapseAll)}>Collapse all</Button>
        <Button onClick={() => setTree(expandAll)}>Expand all</Button>
      </div>
      <nav aria-label="Files">
        <CurrentPathContext.Provider value={{currentPath, setCurrentPath}}>
          <TreeView aria-label="Files">
            {tree.map(item => (
              <TreeItem
                key={item.data.name}
                item={item}
                path={[item.data.name]}
                onExpandedChange={(path, expanded) => setTree(tree => setExpanded(tree, path, expanded))}
              />
            ))}
          </TreeView>
        </CurrentPathContext.Provider>
      </nav>
    </div>
  )
}

function TreeItem({
  item,
  path,
  onExpandedChange,
}: {
  item: TreeItem
  path: string[]
  onExpandedChange: (path: string[], expanded: boolean) => void
}) {
  const {currentPath, setCurrentPath} = React.useContext(CurrentPathContext)
  return (
    <TreeView.Item
      id={path.join('/')}
      current={currentPath.join('/') === path.join('/')}
      expanded={item.data.expanded}
      onExpandedChange={expanded => onExpandedChange(path, expanded)}
      onSelect={() => setCurrentPath(path)}
    >
      {item.data.name}
      {item.children.length > 0 ? (
        <TreeView.SubTree>
          {item.children.map(child => (
            <TreeItem
              key={child.data.name}
              item={child}
              path={path.concat(child.data.name)}
              onExpandedChange={onExpandedChange}
            />
          ))}
        </TreeView.SubTree>
      ) : null}
    </TreeView.Item>
  )
}

export default meta
