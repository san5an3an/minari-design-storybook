// @ts-nocheck
import { SkeletonAvatar } from '@primer/react/experimental';
import { AvatarStack } from '@primer/react';


export default {
  title: 'Components/Skeleton/SkeletonAvatar/Features',
  component: SkeletonAvatar,
} as Meta<ComponentProps<typeof SkeletonAvatar>>

export const InAStack = () => (
  <AvatarStack>
    <SkeletonAvatar />
    <SkeletonAvatar />
    <SkeletonAvatar />
    <SkeletonAvatar />
  </AvatarStack>
)
