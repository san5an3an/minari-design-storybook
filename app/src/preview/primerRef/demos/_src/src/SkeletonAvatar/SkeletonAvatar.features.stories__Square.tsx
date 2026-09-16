// @ts-nocheck
import { SkeletonAvatar } from '@primer/react/experimental';


export default {
  title: 'Components/Skeleton/SkeletonAvatar/Features',
  component: SkeletonAvatar,
} as Meta<ComponentProps<typeof SkeletonAvatar>>

export const Square = () => <SkeletonAvatar square />
