// @ts-nocheck
import {useState} from 'react'
import {LocationIcon, RepoIcon} from '@primer/octicons-react'
import { Avatar } from '@primer/react';
import { Link } from '@primer/react';
import { Text } from '@primer/react';
import { AnchoredOverlay } from '@primer/react';
import { Button } from '@primer/react';
import { Octicon } from '@primer/react/deprecated';
import { Stack } from '@primer/react';
import classes from './AnchoredOverlay.stories.module.css'


export default {
  title: 'Components/AnchoredOverlay',
  component: AnchoredOverlay,
} as Meta

const hoverCard = (
  <Stack gap="condensed" style={{padding: '16px'}}>
    <Stack direction="horizontal" gap="condensed" justify="space-between">
      <Avatar src="https://avatars.githubusercontent.com/u/7143434?v=4" size={48} />
      <Button size="small">Follow</Button>
    </Stack>
    <Stack direction="horizontal" gap="none">
      <Text weight="medium">monalisa</Text>
      <Text className={classes.TextMutedWithMargin}>
        <Link inline muted href="#">
          Monalisa Octocat
        </Link>
      </Text>
    </Stack>
    <Text size="medium">Former beach cat and champion swimmer. Now your friendly octapus with a normal face.</Text>
    <Stack direction="horizontal" gap="none">
      <Octicon className={classes.Icon} icon={LocationIcon} />
      <Text className={classes.TextSmallMutedWithMargin}>Interwebs</Text>
    </Stack>
    <Stack direction="horizontal" gap="none">
      <Octicon className={classes.Icon} icon={RepoIcon} />
      <Text className={classes.TextSmallMutedWithMargin}>Owns this repository</Text>
    </Stack>
  </Stack>
)

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderAnchor={props => <Button {...props}>Button</Button>}
      overlayProps={{role: 'dialog', 'aria-modal': true, 'aria-label': 'User Card Overlay', style: {minWidth: '320px'}}}
      focusZoneSettings={{disabled: true}}
      preventOverflow={false}
    >
      {hoverCard}
    </AnchoredOverlay>
  )
}
