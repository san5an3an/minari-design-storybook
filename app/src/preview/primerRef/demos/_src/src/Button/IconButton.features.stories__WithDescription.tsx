// @ts-nocheck
import {HeartIcon, InboxIcon, ChevronDownIcon, DownloadIcon, BoldIcon} from '@primer/octicons-react'
import { IconButton } from '@primer/react';


export default {
  title: 'Components/IconButton/Features',
}

export const WithDescription = () => (
  <IconButton icon={InboxIcon} aria-label="Notifications" description="You have no unread notifications." />
)
