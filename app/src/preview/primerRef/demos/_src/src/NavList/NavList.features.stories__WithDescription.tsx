// @ts-nocheck
import { NavList } from '@primer/react';
import {
  type Icon,
  ArrowRightIcon,
  ArrowLeftIcon,
  BookIcon,
  FileDirectoryIcon,
  CodeIcon,
  RepoIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  CommentDiscussionIcon,
  PeopleIcon,
  GitCommitIcon,
  PackageIcon,
  MilestoneIcon,
  TelescopeIcon,
} from '@primer/octicons-react'


const meta: Meta = {
  title: 'Components/NavList/Features',
  component: NavList,
  parameters: {
    layout: 'fullscreen',
  },
}

export const WithDescription: StoryFn = () => (
  <NavList>
    <NavList.Item href="#" aria-current="page">
      <NavList.LeadingVisual>
        <RepoIcon />
      </NavList.LeadingVisual>
      Main Repository
      <NavList.Description>Primary project repository</NavList.Description>
    </NavList.Item>
    <NavList.Item href="#">
      <NavList.LeadingVisual>
        <BookIcon />
      </NavList.LeadingVisual>
      Documentation
      <NavList.Description>User guides and API documentation</NavList.Description>
    </NavList.Item>
    <NavList.Item href="#">
      <NavList.LeadingVisual>
        <IssueOpenedIcon />
      </NavList.LeadingVisual>
      Bug Reports
      <NavList.Description variant="block">
        Submit and track bug reports for the project. Include detailed steps to reproduce, expected behavior, and system
        information.
      </NavList.Description>
    </NavList.Item>
    <NavList.Item href="#">
      <NavList.LeadingVisual>
        <PeopleIcon />
      </NavList.LeadingVisual>
      Community
      <NavList.Description variant="block">
        Connect with other developers, share ideas, and collaborate on features and improvements.
      </NavList.Description>
    </NavList.Item>
    <NavList.Item href="#">
      <NavList.LeadingVisual>
        <GitCommitIcon />
      </NavList.LeadingVisual>
      Recent Changes
      <NavList.Description>Latest commits and releases</NavList.Description>
    </NavList.Item>
  </NavList>
)

export default meta
