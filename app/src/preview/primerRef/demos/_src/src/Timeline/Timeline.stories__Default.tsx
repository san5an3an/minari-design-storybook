// @ts-nocheck
import { Timeline } from '@primer/react';
import {
  AlertIcon,
  BellIcon,
  BellSlashIcon,
  BookmarkIcon,
  CheckCircleIcon,
  CommentDiscussionIcon,
  CopilotIcon,
  CrossReferenceIcon,
  EyeIcon,
  GitBranchIcon,
  GitCommitIcon,
  GitMergeIcon,
  GitPullRequestClosedIcon,
  GitPullRequestDraftIcon,
  GitPullRequestIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
  IssueReopenedIcon,
  LockIcon,
  MilestoneIcon,
  PencilIcon,
  PersonAddIcon,
  PersonIcon,
  PinIcon,
  ProjectIcon,
  RocketIcon,
  ShieldIcon,
  SkipIcon,
  TagIcon,
  TrashIcon,
  UnlockIcon,
  XCircleIcon,
} from '@primer/octicons-react'


export default {
  title: 'Components/Timeline',
  component: Timeline,
  subcomponents: {
    'Timeline.Item': Timeline.Item,
    'Timeline.Avatar': Timeline.Avatar,
    'Timeline.Badge': Timeline.Badge,
    'Timeline.Body': Timeline.Body,
    'Timeline.Break': Timeline.Break,
    'Timeline.Actions': Timeline.Actions,
  },
  argTypes: {
    // `clipSidebar` only matters with multiple Timeline.Items. `className` is a passthrough
    // prop that isn't useful in the Playground. Hide both from the controls panel.
    clipSidebar: {table: {disable: true}},
    className: {table: {disable: true}},
  },
} as Meta<ComponentProps<typeof Timeline>>

export const Default = () => (
  <Timeline>
    <Timeline.Item>
      <Timeline.Badge>
        <GitCommitIcon aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge>
        <GitCommitIcon aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge>
        <GitCommitIcon aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
  </Timeline>
)
