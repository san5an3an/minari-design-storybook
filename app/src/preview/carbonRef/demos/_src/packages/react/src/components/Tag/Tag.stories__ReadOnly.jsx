import { Tag } from '@carbon/react';
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

export const ReadOnly = (args) => {
  return (
    <>
      <Tag className="some-class" type="red" {...args}>
        {'Tag content with a long text description'}
      </Tag>
      <Tag className="some-class" type="magenta" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="purple" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="blue" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="cyan" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="teal" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="green" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="gray" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="cool-gray" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="warm-gray" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="high-contrast" {...args}>
        {'Tag content'}
      </Tag>
      <Tag className="some-class" type="outline" {...args}>
        {'Tag content'}
      </Tag>
    </>
  );
};

ReadOnly.args = {
  disabled: false,
  filter: false,
  size: 'md',
  title: 'Clear filter',
};

ReadOnly.argTypes = {
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  filter: {
    control: {
      type: 'boolean',
    },
  },
  id: {
    control: false,
  },
  renderIcon: {
    control: false,
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  title: {
    control: {
      type: 'text',
    },
  },
  type: {
    options: [
      'red',
      'blue',
      'cyan',
      'teal',
      'green',
      'gray',
      'high-contrast',
      'outline',
    ],
    control: {
      type: 'select',
    },
  },
};
