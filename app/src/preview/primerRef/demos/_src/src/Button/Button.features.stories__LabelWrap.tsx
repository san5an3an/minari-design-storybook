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

export const LabelWrap = () => {
  return (
    <Stack style={{width: '200px'}}>
      <Button labelWrap>This button label will wrap if the label is too long</Button>
      <Button size="small" labelWrap>
        This small button label will wrap if the label is too long
      </Button>
      <Button size="large" labelWrap>
        This large button label will wrap if the label is too long
      </Button>
      <Button labelWrap leadingVisual={HeartIcon} trailingVisual={EyeIcon}>
        This button label will wrap if the label is too long
      </Button>
    </Stack>
  )
}
