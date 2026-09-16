// @ts-nocheck
import { Timeline } from '@primer/react';
import {
  CheckIcon,
  CrossReferenceIcon,
  FlameIcon,
  GitBranchIcon,
  GitCommitIcon,
  GitMergeIcon,
  GitPullRequestIcon,
  HeartIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
  LockIcon,
  RepoPushIcon,
  SkipIcon,
  TasklistIcon,
  XIcon,
} from '@primer/octicons-react'


export default {
  title: 'Components/Timeline/Features',
  component: Timeline,
  subcomponents: {
    'Timeline.Item': Timeline.Item,
    'Timeline.Avatar': Timeline.Avatar,
    'Timeline.Badge': Timeline.Badge,
    'Timeline.Body': Timeline.Body,
    'Timeline.Break': Timeline.Break,
    'Timeline.Actions': Timeline.Actions,
  },
} as Meta<ComponentProps<typeof Timeline>>

export const TimelineBreak = () => (
  <Timeline>
    <Timeline.Item>
      <Timeline.Badge variant="done">
        <GitMergeIcon aria-label="Merged" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
    <Timeline.Break />
    <Timeline.Item>
      <Timeline.Badge>
        <GitBranchIcon aria-label="Branch" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
  </Timeline>
)
