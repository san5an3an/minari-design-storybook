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

export const BadgeVariants = () => (
  <Timeline>
    <Timeline.Item>
      <Timeline.Badge variant="accent">
        <GitPullRequestIcon aria-label="Pull request" />
      </Timeline.Badge>
      <Timeline.Body>Accent</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="success">
        <IssueClosedIcon aria-label="Closed" />
      </Timeline.Badge>
      <Timeline.Body>Success</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="attention">
        <FlameIcon aria-label="Attention" />
      </Timeline.Badge>
      <Timeline.Body>Attention</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="severe">
        <SkipIcon aria-label="Severe" />
      </Timeline.Badge>
      <Timeline.Body>Severe</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="danger">
        <XIcon aria-label="Danger" />
      </Timeline.Badge>
      <Timeline.Body>Danger</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="done">
        <GitMergeIcon aria-label="Merged" />
      </Timeline.Badge>
      <Timeline.Body>Done</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="open">
        <IssueOpenedIcon aria-label="Open" />
      </Timeline.Badge>
      <Timeline.Body>Open</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="closed">
        <IssueClosedIcon aria-label="Closed" />
      </Timeline.Badge>
      <Timeline.Body>Closed</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge variant="sponsors">
        <HeartIcon aria-label="Sponsors" />
      </Timeline.Badge>
      <Timeline.Body>Sponsors</Timeline.Body>
    </Timeline.Item>
  </Timeline>
)
