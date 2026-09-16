// @ts-nocheck
import { SkeletonBox } from '@primer/react';


export default {
  title: 'Components/Skeleton/SkeletonBox/Features',
  component: SkeletonBox,
} as Meta<ComponentProps<typeof SkeletonBox>>

export const CustomHeight = () => <SkeletonBox height="4rem" />
