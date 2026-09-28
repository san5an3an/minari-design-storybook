// @ts-nocheck
import {useEffect, useRef, useState, type JSX} from 'react'
import { AnchoredOverlay } from '@primer/react';
import { Heading } from '@primer/react';
import { registerPortalRoot } from '@primer/react';
import {Playground} from './AnchoredOverlay.stories'
import classes from './AnchoredOverlay.features.stories.module.css'


export default {
  title: 'Components/AnchoredOverlay/Features',
  component: AnchoredOverlay,
} as Meta

const HeaderAndLayout = ({children}: {children: JSX.Element}) => {
  const scrollingElementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (scrollingElementRef.current) {
      registerPortalRoot(scrollingElementRef.current, 'scrollingPortal')
    }
  }, [scrollingElementRef])
  return (
    <div className={classes.HeaderAndLayout}>
      <Heading>Header or some such</Heading>
      <div className={classes.ScrollingRegion}>
        {children}
        <div ref={scrollingElementRef} className={classes.PortalRootRegion} />
      </div>
    </div>
  )
}

export const PortalInsideScrollingElement = (args: Args) => {
  const rows = 20
  const columns = 10
  return (
    <HeaderAndLayout>
      <table>
        <tbody>
          {Array(rows)
            .fill(null)
            .map((_, i) => (
              <tr key={i}>
                {Array(columns)
                  .fill(null)
                  .map((_1, j) => (
                    <td key={`${i}${j}`}>
                      <div className={classes.PlaygroundCell}>
                        <Playground {...{...args, portalContainerName: 'scrollingPortal'}} />
                      </div>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </HeaderAndLayout>
  )
}
