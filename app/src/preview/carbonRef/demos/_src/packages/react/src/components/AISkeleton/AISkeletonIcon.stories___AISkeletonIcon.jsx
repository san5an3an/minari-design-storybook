import { AISkeletonIcon } from '@carbon/react';
import mdx from './AISkeleton.mdx';


export default {
  title: 'Components/Skeleton/AISkeleton',
  component: AISkeletonIcon,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const propsSkeleton = {
  style: {
    margin: '50px',
  },
};

const propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px',
  },
};

export const _AISkeletonIcon = () => {
  const propsSkeleton = {
    style: {
      margin: '50px',
    },
  };

  const propsSkeleton2 = {
    style: {
      margin: '50px',
      width: '24px',
      height: '24px',
    },
  };
  return (
    <>
      <AISkeletonIcon {...propsSkeleton} />
      <AISkeletonIcon {...propsSkeleton2} />
    </>
  );
};
