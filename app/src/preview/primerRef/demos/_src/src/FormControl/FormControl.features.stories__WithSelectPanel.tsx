// @ts-nocheck
import React, {useState} from 'react'
import { Button } from '@primer/react';
import { FormControl } from '@primer/react';
import { SelectPanel } from '@primer/react';
import {MarkGithubIcon, TriangleDownIcon} from '@primer/octicons-react'
import classes from './FormControl.features.stories.module.css'


export default {
  title: 'Components/FormControl/Features',
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    required: {
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    caption: {
      type: 'string',
    },
  },
} as Meta

function getColorCircle(color: string) {
  return function () {
    return (
      <span
        className={classes.ColorCircle}
        style={{
          backgroundColor: color,
          borderColor: color,
        }}
      />
    )
  }
}

const items: ItemInput[] = [
  {leadingVisual: getColorCircle('#a2eeef'), text: 'enhancement', description: 'New feature or request', id: 1},
  {leadingVisual: getColorCircle('#d73a4a'), text: 'bug', description: "Something isn't working", id: 2},
  {leadingVisual: getColorCircle('#0cf478'), text: 'good first issue', description: 'Good for newcomers', id: 3},
  {leadingVisual: getColorCircle('#ffd78e'), text: 'design', id: 4},
  {leadingVisual: getColorCircle('#ff0000'), text: 'blocker', id: 5},
  {leadingVisual: getColorCircle('#a4f287'), text: 'backend', id: 6},
  {leadingVisual: getColorCircle('#8dc6fc'), text: 'frontend', id: 7},
].map(item => ({...item, descriptionVariant: 'block'}))

export const WithSelectPanel = () => {
  const [selected, setSelected] = React.useState<ItemInput[]>([items[0], items[1]])
  const [filter, setFilter] = React.useState('')
  const filteredItems = items.filter(item => item.text?.toLowerCase().startsWith(filter.toLowerCase()))
  const [open, setOpen] = useState(false)

  return (
    <FormControl required>
      <FormControl.Label id="select_panel_label">Select Labels</FormControl.Label>
      <SelectPanel
        title="Select labels"
        subtitle="Use labels to organize issues and pull requests"
        renderAnchor={({children, id, ...anchorProps}) => (
          <Button
            trailingAction={TriangleDownIcon}
            aria-labelledby={`select_panel_label selectpanel_wrapper`}
            id={id}
            {...anchorProps}
            aria-haspopup="dialog"
          >
            <span id="selectpanel_wrapper">{children ?? 'Select Labels'}</span>
          </Button>
        )}
        open={open}
        onOpenChange={setOpen}
        items={filteredItems}
        selected={selected}
        onSelectedChange={setSelected}
        onFilterChange={setFilter}
      />
    </FormControl>
  )
}
