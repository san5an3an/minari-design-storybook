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

export const WithParentLinkAndActionsOfContextArea = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Title">
      <PageHeader.TitleArea>
        <PageHeader.Title>Title</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.ContextArea>
        <PageHeader.ParentLink href="http://github.com">Parent Link</PageHeader.ParentLink>

        <PageHeader.ContextAreaActions>
          <Button size="small" trailingAction={TriangleDownIcon}>
            Add File
          </Button>
          <IconButton size="small" aria-label="More Options" icon={KebabHorizontalIcon} />
        </PageHeader.ContextAreaActions>
      </PageHeader.ContextArea>
    </PageHeader>
  </div>
)

WithParentLinkAndActionsOfContextArea.parameters = {
  viewport: {
    defaultViewport: 'small',
  },
}

export default meta
