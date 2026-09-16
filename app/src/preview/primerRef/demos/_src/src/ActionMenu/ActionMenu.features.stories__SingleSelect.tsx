// @ts-nocheck
import React from 'react'
import { ActionMenu } from '@primer/react';
import { ActionList } from '@primer/react';
import classes from './ActionMenu.features.stories.module.css'


export default {
  title: 'Components/ActionMenu/Features',
}

export const SingleSelect = () => {
  const options = [
    {name: 'Fast forward'},
    {name: 'Recursive'},
    {name: 'Ours'},
    {name: 'Octopus'},
    {name: 'Resolve'},
    {name: 'Subtree'},
  ]
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const selectedType = options[selectedIndex]

  return (
    <ActionMenu>
      <ActionMenu.Button>
        <span className={classes.MutedText}>Options:</span> {selectedType.name}
      </ActionMenu.Button>
      <ActionMenu.Overlay width="auto">
        <ActionList selectionVariant="single">
          {options.map((options, index) => (
            <ActionList.Item key={index} selected={index === selectedIndex} onSelect={() => setSelectedIndex(index)}>
              {options.name}
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}
