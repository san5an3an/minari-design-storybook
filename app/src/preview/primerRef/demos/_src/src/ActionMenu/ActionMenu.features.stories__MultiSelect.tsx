// @ts-nocheck
import React from 'react'
import { ActionMenu } from '@primer/react';
import { ActionList } from '@primer/react';


export default {
  title: 'Components/ActionMenu/Features',
}

export const MultiSelect = () => {
  type Option = {name: string; selected: boolean}

  const [options, setOptions] = React.useState<Option[]>([
    {name: 'Show code folding buttons', selected: true},
    {name: 'Wrap lines', selected: false},
    {name: 'Center content', selected: false},
  ])

  const toggle = (name: string) => {
    setOptions(
      options.map(option => {
        if (option.name === name) option.selected = !option.selected
        return option
      }),
    )
  }

  return (
    <ActionMenu>
      <ActionMenu.Button>Display</ActionMenu.Button>
      <ActionMenu.Overlay width="auto">
        <ActionList selectionVariant="multiple">
          {options.map(options => (
            <ActionList.Item key={options.name} selected={options.selected} onSelect={() => toggle(options.name)}>
              {options.name}
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}
