// @ts-nocheck
import { IconButton } from '@primer/react';
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

export const WithLeadingAndTrailingActions = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Title">
      <PageHeader.TitleArea>
        <PageHeader.Title>Title</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.LeadingAction>
        <IconButton aria-label="Expand" icon={SidebarExpandIcon} variant="invisible" />
      </PageHeader.LeadingAction>
      <PageHeader.TrailingAction>
        <IconButton aria-label="Edit" icon={PencilIcon} variant="invisible" />
      </PageHeader.TrailingAction>
    </PageHeader>
  </div>
)

export default meta
