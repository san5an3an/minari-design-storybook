// @ts-nocheck
import React from 'react'
import { PageLayout } from '@primer/react';
import { NavList } from '@primer/react';


const meta: Meta = {
  title: 'Components/NavList/Features',
  component: NavList,
  parameters: {
    layout: 'fullscreen',
  },
}

const NextJSLikeLink = React.forwardRef<HTMLAnchorElement, NextJSLinkProps>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({href, children}, ref): React.ReactElement<any> => {
    const child = React.Children.only(children)
    const childProps = {
      ref,
      href,
    }
    return <>{React.isValidElement(child) ? React.cloneElement(child, childProps) : null}</>
  },
)

export const WithNextJsLink = () => (
  <PageLayout>
    <PageLayout.Pane position="start">
      <NavList>
        <NextJSLikeLink href="#">
          <NavList.Item aria-current="page">Item 1</NavList.Item>
        </NextJSLikeLink>
        <NextJSLikeLink href="#">
          <NavList.Item>Item 2</NavList.Item>
        </NextJSLikeLink>
        <NextJSLikeLink href="#">
          <NavList.Item>Item 3</NavList.Item>
        </NextJSLikeLink>
      </NavList>
    </PageLayout.Pane>
    <PageLayout.Content></PageLayout.Content>
  </PageLayout>
)

WithNextJsLink.storyName = 'With Next JS Link'

export default meta
