// @ts-nocheck
import { PageLayout } from '@primer/react';
import { NavList } from '@primer/react';


const meta: Meta = {
  title: 'Components/NavList/Features',
  component: NavList,
  parameters: {
    layout: 'fullscreen',
  },
}

export const ExpandWithPages: StoryFn = () => {
  const items = [
    {href: '#', text: 'Item 4'},
    {href: '#', text: 'Item 5'},
    {href: '#', text: 'Item 6'},
    {href: '#', text: 'Item 7'},
    {href: '#', text: 'Item 8'},
    {href: '#', text: 'Item 9'},
  ]

  return (
    <PageLayout>
      <PageLayout.Pane position="start">
        <NavList>
          <NavList.Item href="#" aria-current="page">
            Item 1
          </NavList.Item>
          <NavList.Item href="#">Item 2</NavList.Item>
          <NavList.Item href="#">Item 3</NavList.Item>
          <NavList.GroupExpand pages={2} label="Show more" items={items} />
        </NavList>
      </PageLayout.Pane>
      <PageLayout.Content></PageLayout.Content>
    </PageLayout>
  )
}

export default meta
