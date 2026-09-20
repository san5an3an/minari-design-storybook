// @ts-nocheck
import { Dropdown, DropdownSkeleton } from '@carbon/react';
import mdx from './Dropdown.mdx';


const sharedArgTypes = {
  'aria-label': {
    control: 'text',
  },
  autoAlign: {
    control: 'boolean',
  },
  direction: {
    control: 'select',
    options: ['top', 'bottom'],
  },
  invalid: {
    control: 'boolean',
  },
  invalidText: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  hideLabel: {
    control: 'boolean',
  },
  helperText: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: 'boolean',
  },
  warn: {
    control: 'boolean',
  },
  warnText: {
    control: 'text',
  },
  titleText: {
    control: 'text',
    type: {
      required: true,
    },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: 'select',
  },
  type: {
    control: 'select',
    options: ['default', 'inline'],
  },
};

const skeletonArgs = {
  hideLabel: false,
  size: 'md',
};

const skeletonArgTypes = {
  hideLabel: { control: 'boolean' },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
  },
};

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: {
    DropdownSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      include: Object.keys(sharedArgTypes),
    },
  },
};

export const Skeleton = (args) => {
  return (
    <div style={{ width: 300 }}>
      <DropdownSkeleton {...args} />
    </div>
  );
};

Skeleton.args = { ...skeletonArgs };
Skeleton.argTypes = { ...skeletonArgTypes };
Skeleton.parameters = {
  controls: { include: Object.keys(skeletonArgTypes) },
};
