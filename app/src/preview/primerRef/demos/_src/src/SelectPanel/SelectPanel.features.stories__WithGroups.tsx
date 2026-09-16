// @ts-nocheck
import React, {useState, useRef, useEffect} from 'react'
import { Button } from '@primer/react';
import { SelectPanel } from '@primer/react';
import {
  AlertIcon,
  FilterIcon,
  GearIcon,
  InfoIcon,
  NoteIcon,
  PlusIcon,
  ProjectIcon,
  SearchIcon,
  StopIcon,
  TagIcon,
  TriangleDownIcon,
  TypographyIcon,
  VersionsIcon,
  type IconProps,
} from '@primer/octicons-react'
import { FormControl } from '@primer/react';


const meta: Meta<typeof SelectPanel> = {
  title: 'Components/SelectPanel/Features',
  component: SelectPanel,
} satisfies Meta<SelectPanelProps>

export default meta

const NoResultsMessage = (filter: string): {variant: 'empty'; title: string; body: string} => {
  return {
    variant: 'empty',
    title: `No language found for \`${filter}\``,
    body: 'Adjust your search term to find other languages',
  }
}

const listOfItems: Array<ItemInput> = [
  {
    id: '1',
    key: 1,
    leadingVisual: SearchIcon,
    text: 'item 1',
    groupId: '1',
  },
  {
    id: '2',
    key: 2,
    leadingVisual: NoteIcon,
    text: 'Item 2',
    description: 'Some description',
    descriptionVariant: 'block',
    groupId: '1',
  },
  {
    id: '3',
    key: 3,
    leadingVisual: ProjectIcon,
    text: 'Item 3',
    description: 'Some description as well',
    descriptionVariant: 'block',
    groupId: '2',
  },
  {
    id: '4',
    key: 4,
    leadingVisual: FilterIcon,
    text: 'Item 4',
    groupId: '2',
  },
  {id: '5', key: 5, leadingVisual: FilterIcon, text: 'Save sort and filters to new view', groupId: '1'},
  {id: '6', key: 6, leadingVisual: GearIcon, text: 'View settings', groupId: '0'},
  {id: '7', key: 7, leadingVisual: TypographyIcon, text: 'Rename', groupId: '0'},
  {id: '8', key: 8, leadingVisual: VersionsIcon, text: 'Duplicate', groupId: '0'},
]

const groupMetadata: GroupedListProps['groupMetadata'] = [
  {groupId: '0', header: {title: 'Repos', variant: 'filled'}},
  {groupId: '1', header: {title: 'Live query', variant: 'filled'}},
  {groupId: '2', header: {title: 'Layout', variant: 'filled'}},
]

export const WithGroups = () => {
  const [selected, setSelected] = useState<ItemInput[]>([])
  const [filter, setFilter] = useState('')
  const filteredItems = listOfItems.filter(item => item.text?.toLowerCase().startsWith(filter.toLowerCase()))

  const [open, setOpen] = useState(false)

  return (
    <FormControl>
      <FormControl.Label>Options</FormControl.Label>
      <SelectPanel
        title="Attach files and symbols"
        subtitle="Choose which files and symbols you want to chat about. Use fewer references for more accurate responses."
        renderAnchor={({children, ...anchorProps}) => (
          <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children}
          </Button>
        )}
        placeholder="Select options" // button text when no items are selected
        groupMetadata={groupMetadata}
        open={open}
        onOpenChange={setOpen}
        items={filteredItems}
        selected={selected}
        onSelectedChange={setSelected}
        onFilterChange={setFilter}
        overlayProps={{width: 'large', height: 'xlarge'}}
        width="medium"
        message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined}
      />
    </FormControl>
  )
}
