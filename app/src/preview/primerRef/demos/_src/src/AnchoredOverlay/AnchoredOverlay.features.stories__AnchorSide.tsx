// @ts-nocheck
import {useEffect, useRef, useState, type JSX} from 'react'
import { Avatar } from '@primer/react';
import { Link } from '@primer/react';
import { AnchoredOverlay } from '@primer/react';
import { Octicon } from '@primer/react/deprecated';
import { Button } from '@primer/react';
import {LocationIcon, RepoIcon} from '@primer/octicons-react'
import { Stack } from '@primer/react';
import classes from './AnchoredOverlay.features.stories.module.css'


export default {
  title: 'Components/AnchoredOverlay/Features',
  component: AnchoredOverlay,
} as Meta

const hoverCard = (
  <Stack gap="condensed" style={{padding: '16px'}}>
    <Stack direction="horizontal" gap="condensed" justify="space-between">
      <Avatar src="https://avatars.githubusercontent.com/u/7143434?v=4" size={48} />
      <Button size="small">Follow</Button>
    </Stack>
    <Stack direction="horizontal" gap="none">
      <span className={classes.UserName}>monalisa</span>
      <span className={classes.UserMeta}>
        <Link inline muted href="#">
          Monalisa Octocat
        </Link>
      </span>
    </Stack>
    <span className={classes.Bio}>
      Former beach cat and champion swimmer. Now your friendly octopus with a normal face.
    </span>
    <Stack direction="horizontal" gap="none">
      <Octicon className={classes.Icon} icon={LocationIcon} />
      <span className={classes.MetaMuted}>Interwebs</span>
    </Stack>
    <Stack direction="horizontal" gap="none">
      <Octicon className={classes.Icon} icon={RepoIcon} />
      <span className={classes.MetaMuted}>Owns this repository</span>
    </Stack>
  </Stack>
)

export const AnchorSide = () => {
  const [open, setOpen] = useState(false)

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderAnchor={props => <Button {...props}>Button</Button>}
      side="outside-right"
      overlayProps={{
        role: 'dialog',
        'aria-modal': true,
        'aria-label': 'User Card Overlay',
        className: classes.Overlay,
      }}
      focusZoneSettings={{disabled: true}}
      preventOverflow={false}
    >
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>
  )
}
