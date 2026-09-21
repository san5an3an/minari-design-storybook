// @ts-nocheck
import { ExpandableSearch } from '@carbon/react';
import { Search } from '@carbon/react';
import { SearchSkeleton } from '@carbon/react';
import mdx from './Search.mdx';


export default {
  title: 'Components/Search',
  component: Search,
  args: {
    closeButtonLabelText: 'Clear search input',
    disabled: false,
    defaultWidth: 800,
    labelText: 'Site search',
    placeholder: 'Placeholder text',
    size: 'md',
    type: 'search',
  },
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
    defaultWidth: {
      control: { type: 'range', min: 300, max: 800, step: 50 },
    },
    closeButtonLabelText: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    labelText: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
  },
  subcomponents: {
    ExpandableSearch,
    SearchSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['id'],
    },
  },
};

export const Skeleton = ({ size, defaultWidth }) => (
  <div style={{ width: defaultWidth }}>
    <SearchSkeleton size={size} />
  </div>
);
Skeleton.argTypes = {
  size: {
    description: 'Specify the size of the SearchSkeleton',
  },
};
Skeleton.parameters = {
  controls: {
    include: ['size', 'defaultWidth'],
  },
};
