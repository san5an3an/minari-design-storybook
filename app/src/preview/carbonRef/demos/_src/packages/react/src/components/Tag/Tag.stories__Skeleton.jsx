import { Tag } from '@carbon/react';
import { TagSkeleton } from '@carbon/react';
import '../AILabel/ailabel-story.scss';
import mdx from './Tag.mdx';
import './story.scss';


export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Skeleton = (args) => (
  <div>
    <TagSkeleton {...args} />
  </div>
);

Skeleton.args = {
  size: 'md',
};

Skeleton.parameters = {
  controls: {
    exclude: ['disabled', 'filter', 'id', 'renderIcon', 'title', 'type'],
  },
};

Skeleton.argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
};
