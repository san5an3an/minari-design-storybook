// @ts-nocheck
import {EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon} from '@primer/octicons-react'
import { IconButton } from '@primer/react';


const meta: Meta<ComponentProps<typeof IconButton>> = {
  title: 'Components/IconButton',
}

export default meta

export const Default = () => <IconButton icon={HeartIcon} aria-label="Favorite" />
