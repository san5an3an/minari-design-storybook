// @ts-nocheck
import { IconButton, Button } from '@primer/react';
import {
  PencilIcon,
  SidebarExpandIcon,
  CommentDiscussionIcon,
  GitCommitIcon,
  FileDiffIcon,
  ChecklistIcon,
  WorkflowIcon,
  GraphIcon,
  TriangleDownIcon,
  GearIcon,
  GitPullRequestIcon,
  GitBranchIcon,
  KebabHorizontalIcon,
} from '@primer/octicons-react'
import { PageHeader } from '@primer/react';
import classes from './PageHeader.features.stories.module.css'


const meta: Meta = {
  title: 'Components/PageHeader/Features',
  parameters: {
    layout: 'fullscreen',
    controls: {expanded: true},
  },
  args: {},
}

export const WithActions = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Title">
      <PageHeader.TitleArea>
        <PageHeader.Title>Title</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.Actions>
        <IconButton aria-label="Workflows" icon={WorkflowIcon} />
        <IconButton aria-label="Insights" icon={GraphIcon} />
        <Button variant="primary" trailingVisual={TriangleDownIcon}>
          Add Item
        </Button>
        <IconButton aria-label="Settings" icon={GearIcon} />
      </PageHeader.Actions>
    </PageHeader>
  </div>
)

export default meta
