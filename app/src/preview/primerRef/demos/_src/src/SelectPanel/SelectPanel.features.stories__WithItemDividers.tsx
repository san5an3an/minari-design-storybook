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
import classes from './SelectPanel.features.stories.module.css'


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

function getColorCircle(color: string) {
  return function () {
    return (
      <div
        className={classes.ColorCircle}
        style={{
          backgroundColor: color,
          borderColor: color,
        }}
      />
    )
  }
}

const items = [
  {leadingVisual: getColorCircle('#a2eeef'), text: 'enhancement', id: 1},
  {leadingVisual: getColorCircle('#d73a4a'), text: 'bug', id: 2},
  {leadingVisual: getColorCircle('#0cf478'), text: 'good first issue', id: 3},
  {leadingVisual: getColorCircle('#ffd78e'), text: 'design', id: 4},
  {leadingVisual: getColorCircle('#ff0000'), text: 'blocker', id: 5},
  {leadingVisual: getColorCircle('#a4f287'), text: 'backend', id: 6},
  {leadingVisual: getColorCircle('#8dc6fc'), text: 'frontend', id: 7},
]

export const WithItemDividers = () => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3))
  const [filter, setFilter] = useState('')
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()))

  const [open, setOpen] = useState(false)

  return (
    <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel
        title="Select labels"
        placeholder="Select labels" // button text when no items are selected
        subtitle="Use labels to organize issues and pull requests"
        renderAnchor={({children, ...anchorProps}) => (
          <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>
        )}
        open={open}
        onOpenChange={setOpen}
        items={filteredItems}
        selected={selected}
        onSelectedChange={setSelected}
        onFilterChange={setFilter}
        showItemDividers={true}
        width="medium"
        message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined}
      />
    </FormControl>
  )
}
