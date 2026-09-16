// @ts-nocheck
import { PageLayout } from '@primer/react';
import { NavList } from '@primer/react';
import {ReactRouterLikeLink} from '../Pagination/mocks/ReactRouterLink'


const meta: Meta = {
  title: 'Components/NavList/Features',
  component: NavList,
  parameters: {
    layout: 'fullscreen',
  },
}

export const WithReactRouterLink = () => (
  <PageLayout>
    <PageLayout.Pane position="start">
      <NavList>
        <NavList.Item as={ReactRouterLikeLink} to="#" aria-current="page">
          Item 1
        </NavList.Item>
        <NavList.Item as={ReactRouterLikeLink} to="#">
          Item 2
        </NavList.Item>
        <NavList.Item as={ReactRouterLikeLink} to="#">
          Item 3
        </NavList.Item>
      </NavList>
    </PageLayout.Pane>
    <PageLayout.Content></PageLayout.Content>
  </PageLayout>
)

export default meta
