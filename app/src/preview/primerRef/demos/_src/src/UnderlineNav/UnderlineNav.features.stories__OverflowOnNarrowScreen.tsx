// @ts-nocheck
import React from 'react'
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
import {INITIAL_VIEWPORTS} from 'storybook/viewport'


const meta = {
  title: 'Components/UnderlineNav/Features',
} satisfies Meta<typeof UnderlineNav>

export default meta

const items: {navigation: string; icon: React.ReactElement; counter?: number | string; href?: string}[] = [
  {navigation: 'Code', icon: <CodeIcon />, href: '#code'},
  {navigation: 'Issues', icon: <IssueOpenedIcon />, counter: '12K', href: '#issues'},
  {navigation: 'Pull Requests', icon: <GitPullRequestIcon />, counter: 13, href: '#pull-requests'},
  {navigation: 'Discussions', icon: <CommentDiscussionIcon />, counter: 5, href: '#discussions'},
  {navigation: 'Actions', icon: <PlayIcon />, counter: 4, href: '#actions'},
  {navigation: 'Projects', icon: <ProjectIcon />, counter: 9, href: '#projects'},
  {navigation: 'Insights', icon: <GraphIcon />, counter: '0', href: '#insights'},
  {navigation: 'Settings', icon: <GearIcon />, counter: 10, href: '#settings'},
  {navigation: 'Security', icon: <ShieldLockIcon />, href: '#security'},
]

export const OverflowTemplate = ({initialSelectedIndex = 1}: {initialSelectedIndex?: number}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(initialSelectedIndex)
  return (
    <UnderlineNav aria-label="Repository" hideIconsBreakpoint="medium">
      {items.map((item, index) => (
        <UnderlineNav.Item
          key={item.navigation}
          leadingVisual={item.icon}
          aria-current={index === selectedIndex ? 'page' : undefined}
          // Set so that navigation in interaction tests does not cause the
          // page to load the storybook iframe URL and instead keeps the test in
          // the local preview
          target="_self"
          onSelect={event => {
            event.preventDefault()
            setSelectedIndex(index)
          }}
          counter={item.counter}
          href={item.href}
        >
          {item.navigation}
        </UnderlineNav.Item>
      ))}
    </UnderlineNav>
  )
}

export const OverflowOnNarrowScreen = () => {
  return <OverflowTemplate initialSelectedIndex={items.length - 1} />
}

OverflowOnNarrowScreen.parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      narrowScreen: {
        name: 'Narrow Screen',
        styles: {
          width: '800px',
          height: '100%',
        },
      },
    },
    defaultViewport: 'narrowScreen',
  },
}
