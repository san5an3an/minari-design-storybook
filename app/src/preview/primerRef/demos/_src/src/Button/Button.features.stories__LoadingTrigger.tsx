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
import {useState} from 'react'
import { Button } from '@primer/react';


export default {
  title: 'Components/Button/Features',
}

export const LoadingTrigger = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
  }

  return (
    <Button loading={isLoading} onClick={handleClick} leadingVisual={DownloadIcon}>
      Export
    </Button>
  )
}
