// @ts-nocheck
import { PageLayout } from '@primer/react';
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

export const WithGroupExpand = () => {
  const items1 = [
    {href: '#', text: 'Item 1D'},
    {href: '#', text: 'Item 1E', trailingAction: {label: 'Some action', icon: ArrowRightIcon}},
  ]

  const items2 = [
    {href: '#', text: 'Item 2D', trailingVisual: BookIcon},
    {href: '#', text: 'Item 2E', trailingVisual: FileDirectoryIcon},
  ]

  return (
    <PageLayout>
      <PageLayout.Pane position="start">
        <NavList>
          <NavList.Group title="Group 1">
            <NavList.Item aria-current="true" href="#">
              Item 1A
            </NavList.Item>
            <NavList.Item href="#">Item 1B</NavList.Item>
            <NavList.Item href="#">Item 1C</NavList.Item>
            <NavList.GroupExpand label="More" items={items1} />
          </NavList.Group>
          <NavList.Group title="Group 2">
            <NavList.Item href="#">Item 2A</NavList.Item>
            <NavList.Item href="#">Item 2B</NavList.Item>
            <NavList.Item href="#">Item 2C</NavList.Item>
            <NavList.GroupExpand label="Show" items={items2} />
          </NavList.Group>
        </NavList>
      </PageLayout.Pane>
      <PageLayout.Content></PageLayout.Content>
    </PageLayout>
  )
}

export default meta
