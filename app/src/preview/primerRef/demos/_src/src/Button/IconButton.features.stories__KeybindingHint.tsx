// @ts-nocheck
import {HeartIcon, InboxIcon, ChevronDownIcon, DownloadIcon, BoldIcon} from '@primer/octicons-react'
import { IconButton } from '@primer/react';


export default {
  title: 'Components/IconButton/Features',
}

export const KeybindingHint = () => <IconButton icon={BoldIcon} aria-label="Bold" keybindingHint="Mod+B" />
