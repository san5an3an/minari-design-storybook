// @ts-nocheck
import {
  EyeIcon,
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  CommentDiscussionIcon,
  PlayIcon,
  ProjectIcon,
  GraphIcon,
  ShieldLockIcon,
  GearIcon,
} from '@primer/octicons-react'
import { UnderlineNav } from '@primer/react';


const meta = {
  title: 'Components/UnderlineNav/Features',
} satisfies Meta<typeof UnderlineNav>

export default meta

export const WithCounterLabels = () => {
  return (
    <UnderlineNav aria-label="Repository with counters">
      <UnderlineNav.Item aria-current="page" leadingVisual={<CodeIcon />} counter="11K">
        Code
      </UnderlineNav.Item>
      <UnderlineNav.Item leadingVisual={<IssueOpenedIcon />} counter={12}>
        Issues
      </UnderlineNav.Item>
    </UnderlineNav>
  )
}
