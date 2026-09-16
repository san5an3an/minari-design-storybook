// @ts-nocheck
import {HeartIcon, InboxIcon, ChevronDownIcon, DownloadIcon, BoldIcon} from '@primer/octicons-react'
import { IconButton } from '@primer/react';


export default {
  title: 'Components/IconButton/Features',
}

export const Danger = () => <IconButton icon={HeartIcon} variant="danger" aria-label="Favorite" />
