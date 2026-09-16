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

export const WithReloads: StoryFn = () => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const location = window.location

  const storyId = new URLSearchParams(location.search).get('id')
  const urlBase = `${location.origin + location.pathname}?id=${storyId}`
  const itemId = new URLSearchParams(location.search).get('itemId')

  return (
    <>
      <PageLayout>
        <PageLayout.Pane position="start">
          <NavList>
            <NavList.Item href={`${urlBase}&itemId=1`} aria-current={itemId === '1' ? 'page' : 'false'}>
              Item 1
            </NavList.Item>
            <NavList.Item>
              Item 2
              <NavList.SubNav>
                <NavList.Item href={`${urlBase}&itemId=2.1`} aria-current={itemId === '2.1' ? 'page' : 'false'}>
                  Sub item 2.1
                </NavList.Item>
                <NavList.Item href={`${urlBase}&itemId=2.2`} aria-current={itemId === '2.2' ? 'page' : 'false'}>
                  Sub item 2.2
                </NavList.Item>
              </NavList.SubNav>
            </NavList.Item>
            <NavList.Item>
              Item 3
              <NavList.SubNav>
                <NavList.Item href={`${urlBase}&itemId=3.1`} aria-current={itemId === '3.1' ? 'page' : 'false'}>
                  Sub item 3.1
                </NavList.Item>
                <NavList.Item href={`${urlBase}&itemId=3.2`} aria-current={itemId === '3.2' ? 'page' : 'false'}>
                  Sub item 3.2
                </NavList.Item>
              </NavList.SubNav>
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content></PageLayout.Content>
      </PageLayout>
    </>
  )
}

export default meta
