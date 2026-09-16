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
import { Link } from '@primer/react';
import { RelativeTime } from '@primer/react';
import { Button } from '@primer/react';
import { Avatar } from '@primer/react';
import { Octicon } from '@primer/react/deprecated';
import classes from './Timeline.features.stories.module.css'


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

export const WithAvatar = () => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div
    className={`${classes.RealisticTimeline} ${classes.AvatarGutter}`}
    onClick={e => {
      if ((e.target as HTMLElement).closest('a')) e.preventDefault()
    }}
  >
    <Timeline>
      <Timeline.Item>
        <Timeline.Avatar>
          <Avatar size={40} src="https://avatars.githubusercontent.com/u/92997159?v=4" alt="" />
        </Timeline.Avatar>
        <Timeline.Badge variant="done">
          <Octicon icon={CheckIcon} aria-label="Approved" />
        </Timeline.Badge>
        <Timeline.Body>
          <Link href="#" className={classes.LinkWithBoldStyle} muted>
            monalisa
          </Link>
          {'approved these changes '}
          <RelativeTime date={new Date()} format="relative" />
        </Timeline.Body>
        <Timeline.Actions>
          <Button size="small">View reviewed changes</Button>
        </Timeline.Actions>
      </Timeline.Item>
    </Timeline>
  </div>
)
