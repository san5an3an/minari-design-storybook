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

export const WithGroupHeadingLinks: StoryFn = () => (
  <PageLayout>
    <PageLayout.Pane position="start">
      <NavList>
        <NavList.Group>
          <NavList.GroupHeading>
            <a href="#group-1">Group 1</a>
          </NavList.GroupHeading>
          <NavList.Item aria-current="true" href="#">
            Item 1A
          </NavList.Item>
          <NavList.Item href="#">Item 1B</NavList.Item>
          <NavList.Item href="#">Item 1C</NavList.Item>
        </NavList.Group>
        <NavList.Group>
          <NavList.GroupHeading>
            <a href="#group-2">Group 2</a>
          </NavList.GroupHeading>
          <NavList.Item href="#">Item 2A</NavList.Item>
          <NavList.Item href="#">Item 2B</NavList.Item>
          <NavList.Item href="#">Item 2C</NavList.Item>
        </NavList.Group>
      </NavList>
    </PageLayout.Pane>
    <PageLayout.Content></PageLayout.Content>
  </PageLayout>
)

export default meta
