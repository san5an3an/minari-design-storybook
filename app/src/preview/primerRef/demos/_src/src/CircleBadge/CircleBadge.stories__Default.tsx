// @ts-nocheck
import { CircleBadge } from '@primer/react';
import {ZapIcon} from '@primer/octicons-react'


const meta: Meta<typeof CircleBadge> = {
  title: 'Deprecated/Components/CircleBadge',
  component: CircleBadge,
}
export default meta

export const Default = () => (
  <CircleBadge>
    <CircleBadge.Icon icon={ZapIcon} aria-label="User badge" />
  </CircleBadge>
)
