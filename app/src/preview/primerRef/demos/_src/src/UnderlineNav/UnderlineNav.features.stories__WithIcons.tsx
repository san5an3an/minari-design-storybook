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

export const WithIcons = () => {
  return (
    <UnderlineNav aria-label="Repository with icons">
      <UnderlineNav.Item leadingVisual={<CodeIcon />}>Code</UnderlineNav.Item>
      <UnderlineNav.Item leadingVisual={<EyeIcon />} counter={6}>
        Issues
      </UnderlineNav.Item>
      <UnderlineNav.Item aria-current="page" leadingVisual={<GitPullRequestIcon />}>
        Pull Requests
      </UnderlineNav.Item>
      <UnderlineNav.Item leadingVisual={<CommentDiscussionIcon />} counter={7}>
        Discussions
      </UnderlineNav.Item>
      <UnderlineNav.Item leadingVisual={<ProjectIcon />}>Projects</UnderlineNav.Item>
    </UnderlineNav>
  )
}
