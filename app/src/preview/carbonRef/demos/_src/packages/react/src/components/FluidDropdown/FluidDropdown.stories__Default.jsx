// @ts-nocheck
import { FluidDropdown, FluidDropdownSkeleton } from '@carbon/react';
import mdx from './FluidDropdown.mdx';


export default {
  title: 'Components/Fluid Components/FluidDropdown',
  component: FluidDropdown,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidDropdownSkeleton,
  },
};

const items = [
  {
    id: 'option-0',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3 - a disabled item',
    disabled: true,
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
  {
    id: 'option-5',
    text: 'Option 5',
  },
];

const sharedArgTypes = {
  autoAlign: {
    control: {
      type: 'boolean',
    },
  },
  className: {
    control: {
      type: 'text',
    },
  },
  isCondensed: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  direction: {
    control: {
      type: 'select',
    },
    options: ['top', 'bottom'],
  },
  invalid: {
    control: {
      type: 'boolean',
    },
  },
  invalidText: {
    control: {
      type: 'text',
    },
  },
  label: {
    control: {
      type: 'text',
    },
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: {
      type: 'boolean',
    },
  },
  titleText: {
    control: {
      type: 'text',
    },
  },
  warn: {
    control: {
      type: 'boolean',
    },
  },
  warnText: {
    control: {
      type: 'text',
    },
  },
};

const sharedArgs = {
  autoAlign: false,
  className: 'test-class',
  direction: 'bottom',
  disabled: false,
  invalid: false,
  invalidText:
    'Error message that is really long can wrap to more lines but should not be excessively long.',
  isCondensed: false,
  label: 'Choose an option',
  readOnly: false,
  titleText: 'Label',
  warn: false,
  warnText:
    'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

const sharedControls = Object.keys(sharedArgTypes);

export const Default = (dropdownArgs) => (
  <FluidDropdown
    id="default"
    titleText="Label"
    label="Choose an option"
    items={items}
    itemToString={(item) => (item ? item.text : '')}
    {...dropdownArgs}
  />
);

Default.args = {
  ...sharedArgs,
};

Default.argTypes = {
  ...sharedArgTypes,
};

Default.parameters = {
  controls: { include: sharedControls },
};
