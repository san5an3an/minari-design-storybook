// @ts-nocheck
import React from 'react'
import { ButtonGroup } from '@primer/react';
import { Button } from '@primer/react';
import {PlusIcon, DashIcon, TriangleDownIcon} from '@primer/octicons-react'
import { ActionMenu } from '@primer/react';
import { ActionList } from '@primer/react';


export default {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>

export const DropdownSplit = () => {
  const actions = ['Action one', 'Action two', 'Action three']
  const [selectedActionIndex, setSelectedActionIndex] = React.useState<number>(0)
  const selectedAction = actions[selectedActionIndex]
  return (
    <ButtonGroup>
      <Button
        onClick={() => {
          alert(`Activated ${selectedAction}`)
        }}
      >
        {selectedAction}
      </Button>
      <ActionMenu>
        <ActionMenu.Button aria-label="More options" icon={TriangleDownIcon} />
        <ActionMenu.Overlay>
          <ActionList>
            {actions.map((action, index) => {
              return (
                <ActionList.Item
                  key={action}
                  onSelect={() => {
                    setSelectedActionIndex(index)
                  }}
                >
                  {action}
                </ActionList.Item>
              )
            })}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </ButtonGroup>
  )
}
