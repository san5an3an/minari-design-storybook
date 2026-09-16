// @ts-nocheck
import { SkeletonAvatar } from '@primer/react/experimental';


export default {
  title: 'Components/Skeleton/SkeletonAvatar/Features',
  component: SkeletonAvatar,
} as Meta<ComponentProps<typeof SkeletonAvatar>>

export const Size = () => (
  <div>
    <SkeletonAvatar size={4} />
    <SkeletonAvatar size={8} />
    <SkeletonAvatar size={12} />
    <SkeletonAvatar size={16} />
    <SkeletonAvatar size={20} />
    <SkeletonAvatar size={24} />
    <SkeletonAvatar size={28} />
    <SkeletonAvatar size={32} />
    <SkeletonAvatar size={40} />
    <SkeletonAvatar size={48} />
    <SkeletonAvatar size={56} />
    <SkeletonAvatar size={64} />
  </div>
)
