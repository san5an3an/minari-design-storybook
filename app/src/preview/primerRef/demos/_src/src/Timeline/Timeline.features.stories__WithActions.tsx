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
import { Button } from '@primer/react';
import { Label } from '@primer/react';
import { StateLabel } from '@primer/react';
import { Avatar } from '@primer/react';
import { BranchName } from '@primer/react';
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

export const WithActions = () => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div
    className={classes.RealisticTimeline}
    onClick={e => {
      if ((e.target as HTMLElement).closest('a')) e.preventDefault()
    }}
  >
    <Timeline>
      <Timeline.Item>
        <Timeline.Badge variant="done">
          <Octicon icon={GitMergeIcon} aria-label="Merged" />
        </Timeline.Badge>
        <Timeline.Body>
          <Link href="#" className={classes.LinkWithBoldStyle} muted>
            Monalisa
          </Link>
          merged via the queue into <BranchName href="#">main</BranchName> with commit{' '}
          <Link href="#" className={classes.CommitSha}>
            01e49tb
          </Link>{' '}
          <Link href="#" className={classes.Timestamp} muted>
            just now
          </Link>
          <div className={classes.ChecksSubline}>28 checks passed</div>
        </Timeline.Body>
        <Timeline.Actions>
          <Button size="small">View details</Button>
          <Button size="small">Revert</Button>
        </Timeline.Actions>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={RepoPushIcon} aria-label="Force-push" />
        </Timeline.Badge>
        <Timeline.Body>
          <Link href="#" className={classes.LinkWithBoldStyle} muted>
            Monalisa
          </Link>
          force-pushed the <BranchName href="#">main</BranchName> branch from{' '}
          <Link href="#" className={classes.CommitSha}>
            01e49tb
          </Link>{' '}
          to{' '}
          <Link href="#" className={classes.CommitSha}>
            02f50uc
          </Link>{' '}
          <Link href="#" className={classes.Timestamp} muted>
            2 hours ago
          </Link>
        </Timeline.Body>
        <Timeline.Actions>
          <Button size="small">Compare</Button>
        </Timeline.Actions>
      </Timeline.Item>
      <Timeline.Item condensed>
        <Timeline.Badge>
          <Octicon icon={GitCommitIcon} aria-label="Commit" />
        </Timeline.Badge>
        <Timeline.Body>
          <Link href="#" muted>
            Update README.md
          </Link>
        </Timeline.Body>
        <Timeline.Actions>
          <Label className={`${classes.SignatureLabelVerified} ${classes.HideAtNarrow}`}>Verified</Label>
          <Octicon icon={CheckIcon} className={classes.IconSuccess} aria-label="All checks passed" />
          <Link href="#" className={classes.ShaLink} muted>
            3fbdc0
          </Link>
        </Timeline.Actions>
      </Timeline.Item>
      <Timeline.Item condensed>
        <Timeline.Badge>
          <Octicon icon={GitCommitIcon} aria-label="Commit" />
        </Timeline.Badge>
        <Timeline.Body>
          <Link href="#" muted>
            Initial commit
          </Link>
        </Timeline.Body>
        <Timeline.Actions>
          <Label className={classes.HideAtNarrow}>Unverified</Label>
          <Octicon icon={XIcon} className={classes.IconDanger} aria-label="Some checks failed" />
          <Link href="#" className={classes.ShaLink} muted>
            3fbdc0
          </Link>
        </Timeline.Actions>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={CrossReferenceIcon} aria-label="Cross-reference" />
        </Timeline.Badge>
        <Timeline.Body>
          <Avatar
            src="https://avatars.githubusercontent.com/u/92997159?v=4"
            size={20}
            className={classes.InlineAvatar}
          />
          <Link href="#" className={classes.LinkWithBoldStyle} muted>
            Monalisa
          </Link>
          mentioned this pull request{' '}
          <Link href="#" className={classes.Timestamp} muted>
            just now
          </Link>
          <div className={classes.CrossReferenceRow}>
            <div className={classes.CrossReferenceTitle}>
              <Link href="#" className={classes.CrossReferenceLink}>
                <span className={classes.CrossReferenceName}>Fix positioning of Autocomplete overlay menu</span>{' '}
                <span className={classes.CrossReferenceNumber}>primer/react#7431</span>
              </Link>
            </div>
            <Octicon icon={LockIcon} size={16} className={classes.CrossReferenceMeta} aria-label="Private" />
            <StateLabel status="pullOpened" size="small">
              Open
            </StateLabel>
          </div>
          <div className={classes.CrossReferenceTaskline}>
            <Octicon icon={TasklistIcon} size={16} />
            17 tasks
          </div>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  </div>
)
