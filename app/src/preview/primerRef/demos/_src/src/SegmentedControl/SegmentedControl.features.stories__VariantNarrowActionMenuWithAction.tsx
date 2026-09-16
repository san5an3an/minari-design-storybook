// @ts-nocheck
import {useState} from 'react'
import {PlusIcon, EyeIcon, FileCodeIcon, PeopleIcon} from '@primer/octicons-react'
import { SegmentedControl } from '@primer/react';
import { Button } from '@primer/react';
import classes from './SegmentedControl.features.stories.module.css'


export default {
  title: 'Components/SegmentedControl/Features',
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>

export const VariantNarrowActionMenuWithAction = () => {
  const initialViews = [
    {id: 'all', label: 'All'},
    {id: 'active', label: 'Active'},
    {id: 'review-requests', label: 'Review requests'},
    {id: 'done', label: 'Done'},
  ]
  const [views, setViews] = useState(initialViews)
  const [selectedViewId, setSelectedViewId] = useState(initialViews[0].id)

  const handleAddView = () => {
    setViews(currentViews => {
      const viewNumber = currentViews.length - 3
      return [...currentViews, {id: `new-view-${viewNumber}`, label: `New view ${viewNumber}`}]
    })
  }

  const handleChange = (index: number) => {
    const nextSelectedViewId = views.at(index)?.id
    if (nextSelectedViewId) setSelectedViewId(nextSelectedViewId)
  }

  const handleReset = () => {
    setViews(initialViews)
    setSelectedViewId(initialViews[0].id)
  }

  return (
    <>
      <SegmentedControl
        aria-label="View"
        onChange={handleChange}
        variant={{narrow: 'dropdown', regular: 'subtle', wide: 'subtle'}}
      >
        {views.flatMap(view => [
          ...(view.label === 'Active' ? [<SegmentedControl.Divider key={`${view.label}-divider`} />] : []),
          <SegmentedControl.Button key={view.id} selected={view.id === selectedViewId}>
            {view.label}
          </SegmentedControl.Button>,
        ])}
        <SegmentedControl.Action label="Add view" icon={PlusIcon} onClick={handleAddView} />
      </SegmentedControl>
      <Button className={classes.ResetButton} size="small" onClick={handleReset}>
        Reset views
      </Button>
    </>
  )
}
VariantNarrowActionMenuWithAction.storyName = '[variant: narrow] Action menu with trailing action'
