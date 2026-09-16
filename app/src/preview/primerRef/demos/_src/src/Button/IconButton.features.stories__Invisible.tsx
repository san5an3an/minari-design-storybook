// @ts-nocheck
import {HeartIcon, InboxIcon, ChevronDownIcon, DownloadIcon, BoldIcon} from '@primer/octicons-react'
import { IconButton } from '@primer/react';


export default {
  title: 'Components/IconButton/Features',
}

export const Invisible = () => <IconButton icon={HeartIcon} variant="invisible" aria-label="Favorite" />
