// @ts-nocheck
import { ButtonGroup } from '@primer/react';
import { IconButton } from '@primer/react';
import {PlusIcon, DashIcon, TriangleDownIcon} from '@primer/octicons-react'


export default {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>

export const IconButtons = () => (
  <ButtonGroup>
    {/* We can remove these unsafe props after we resolve https://github.com/primer/react/issues/4129 */}
    <IconButton icon={PlusIcon} aria-label="Add" />
    <IconButton icon={DashIcon} aria-label="Subtract" />
  </ButtonGroup>
)
