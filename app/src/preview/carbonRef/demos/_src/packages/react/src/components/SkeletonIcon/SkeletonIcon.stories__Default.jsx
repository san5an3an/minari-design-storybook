import { SkeletonIcon } from '@carbon/react';
import mdx from './SkeletonIcon.mdx';


export default {
  title: 'Components/Skeleton/SkeletonIcon',
  component: SkeletonIcon,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'range',
        min: 16,
        max: 64,
        step: 1,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => {
  return (
    <SkeletonIcon
      className={args.className}
      style={{ margin: '50px', height: args.size, width: args.size }}
    />
  );
};

Default.args = {
  className: '',
  size: 16,
};
