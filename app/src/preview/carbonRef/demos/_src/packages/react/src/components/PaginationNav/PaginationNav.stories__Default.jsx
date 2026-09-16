import { PaginationNav } from '@carbon/react';
import mdx from './PaginationNav.mdx';


export default {
  title: 'Components/PaginationNav',
  component: PaginationNav,
  subcomponents: {},
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['translateWithId'],
    },
  },
};

export const Default = (args) => {
  return (
    <div style={{ width: '800px' }}>
      <PaginationNav totalItems={25} {...args} />
    </div>
  );
};

Default.args = {
  size: 'lg',
  loop: false,
  itemsShown: 10,
  page: 0,
  totalItems: 25,
  disableOverflow: false,
};

Default.argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
  },
  loop: {
    control: {
      type: 'boolean',
    },
  },
  itemsShown: {
    control: {
      type: 'number',
    },
  },
  page: {
    control: {
      type: 'number',
    },
  },
  totalItems: {
    control: {
      type: 'number',
    },
  },
  disableOverflow: {
    control: {
      type: 'boolean',
    },
  },
};
