// @ts-nocheck
import { Select, SelectSkeleton } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { SelectItemGroup } from '@carbon/react';
import mdx from './Select.mdx';


export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [(story) => <div style={{ width: '400px' }}>{story()}</div>],
  subcomponents: {
    SelectItem,
    SelectItemGroup,
    SelectSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['id', 'defaultValue'],
    },
  },
};

export const Skeleton = (args) => {
  return <SelectSkeleton {...args} />;
};

Skeleton.args = {
  hideLabel: false,
};

Skeleton.argTypes = {
  hideLabel: {
    control: 'boolean',
  },
};

Skeleton.parameters = {
  controls: { include: ['hideLabel'] },
};
