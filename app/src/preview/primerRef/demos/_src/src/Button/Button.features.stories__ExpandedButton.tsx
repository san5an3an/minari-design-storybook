// @ts-nocheck
import {
  EyeIcon,
  TriangleDownIcon,
  HeartIcon,
  DownloadIcon,
  CommentIcon,
  GearIcon,
  InboxIcon,
  KebabHorizontalIcon,
} from '@primer/octicons-react'
import { Button } from '@primer/react';
import { Stack } from '@primer/react';


export default {
  title: 'Components/Button/Features',
}

export const ExpandedButton = () => (
  <Stack align="start">
    <Button aria-expanded trailingAction={TriangleDownIcon}>
      Review changes
    </Button>
    <Button aria-expanded trailingAction={TriangleDownIcon} variant="primary">
      Review changes
    </Button>
    <Button aria-expanded trailingAction={TriangleDownIcon} variant="invisible">
      Review changes
    </Button>
    <Button aria-expanded trailingAction={TriangleDownIcon} variant="danger">
      Review changes
    </Button>
  </Stack>
)
