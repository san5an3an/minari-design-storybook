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


export default {
  title: 'Components/Button/Features',
}

export const LoadingWithTrailingVisual = () => (
  <Button loading trailingVisual={DownloadIcon}>
    Export
  </Button>
)
