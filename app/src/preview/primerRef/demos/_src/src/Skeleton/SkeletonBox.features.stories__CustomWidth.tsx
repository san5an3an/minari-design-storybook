// @ts-nocheck
import { SkeletonBox } from '@primer/react';


export default {
  title: 'Components/Skeleton/SkeletonBox/Features',
  component: SkeletonBox,
} as Meta<ComponentProps<typeof SkeletonBox>>

export const CustomWidth = () => <SkeletonBox width="300px" />
