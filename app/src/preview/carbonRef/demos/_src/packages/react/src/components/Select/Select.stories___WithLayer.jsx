import { WithLayer } from '../../../.storybook/templates/WithLayer';
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

const sharedArgTypes = {
  disabled: {
    control: 'boolean',
  },
  helperText: {
    control: 'text',
  },
  hideLabel: {
    control: 'boolean',
  },
  inline: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  invalidText: {
    control: 'text',
  },
  labelText: {
    control: 'text',
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: 'boolean',
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
  },
  warn: {
    control: 'boolean',
  },
  warnText: {
    control: 'text',
  },
};

const sharedArgs = {
  disabled: false,
  helperText: 'Select the region where your resources will be hosted.',
  hideLabel: false,
  inline: false,
  invalid: false,
  invalidText: 'Select a deployment region.',
  labelText: 'Deployment region',
  readOnly: false,
  size: 'md',
  warn: false,
  warnText: 'This region has limited availability.',
};

const sharedControls = Object.keys(sharedArgTypes);

const selectItems = (
  <>
    <SelectItem value="" text="Choose a region" />
    <SelectItem value="us-south" text="Dallas (us-south)" />
    <SelectItem value="us-east" text="Washington, DC (us-east)" />
    <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
    <SelectItem value="au-syd" text="Sydney (au-syd)" />
  </>
);

export const _WithLayer = (args) => (
  <WithLayer>
    {(layer) => (
      <Select id={`select-${layer}`} {...args}>
        {selectItems}
      </Select>
    )}
  </WithLayer>
);

_WithLayer.args = {
  ...sharedArgs,
};

_WithLayer.argTypes = {
  ...sharedArgTypes,
};

_WithLayer.parameters = {
  controls: { include: sharedControls },
};
