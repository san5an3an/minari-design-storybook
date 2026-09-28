// @ts-nocheck
import { ProgressIndicator, ProgressStep, ProgressIndicatorSkeleton } from '@carbon/react';
import mdx from './ProgressIndicator.mdx';


export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  subcomponents: {
    ProgressStep,
    ProgressIndicatorSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Skeleton = () => {
  return <ProgressIndicatorSkeleton />;
};
