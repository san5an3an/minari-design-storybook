import { SkeletonText } from '@carbon/react';
import mdx from './SkeletonText.mdx';


export default {
  title: 'Components/Skeleton/SkeletonText',
  component: SkeletonText,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => {
  return <SkeletonText {...args} />;
};

Default.args = {
  heading: false,
  paragraph: false,
  width: '100%',
  lineCount: 3,
};

Default.argTypes = {
  className: {
    control: false,
  },
  heading: {
    control: {
      type: 'boolean',
    },
  },
  paragraph: {
    control: {
      type: 'boolean',
    },
  },
  width: {
    control: {
      type: 'text',
    },
  },
  lineCount: {
    control: {
      type: 'number',
    },
  },
};
