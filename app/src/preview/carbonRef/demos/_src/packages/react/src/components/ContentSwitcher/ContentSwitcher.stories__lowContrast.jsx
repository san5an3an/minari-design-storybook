// @ts-nocheck
import { ContentSwitcher } from '@carbon/react';
import { Switch, IconSwitch } from '@carbon/react';
import mdx from './ContentSwitcher.mdx';


const sharedArgs = {
  disabled: false,
  lowContrast: false,
  selectedIndex: 0,
  selectionMode: 'automatic',
  size: 'md',
};

const sharedArgTypes = {
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  disabled: {
    control: 'boolean',
    description: 'Specify disabled attribute to true to disable a button.',
    table: {
      type: { summary: 'bool' },
      defaultValue: { summary: false },
    },
  },
  lowContrast: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false },
    },
  },
  onChange: {
    action: 'onChange',
  },
  selectedIndex: {
    control: {
      type: 'number',
      min: 0,
      max: 2,
      step: 1,
    },
    table: {
      defaultValue: { summary: 0 },
    },
  },
  selectionMode: {
    control: 'radio',
    options: ['automatic', 'manual'],
    table: {
      defaultValue: { summary: '"automatic"' },
    },
  },
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
    table: {
      defaultValue: { summary: '"md"' },
    },
  },
};

const sharedParameters = {
  controls: {
    include: Object.keys(sharedArgs),
  },
};

export default {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  subcomponents: {
    IconSwitch,
    Switch,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    ...sharedParameters,
  },
};

export const lowContrast = ({ disabled, ...args }) => (
  <ContentSwitcher {...args}>
    <Switch name="one" text="First section" disabled={disabled} />
    <Switch name="two" text="Second section" disabled={disabled} />
    <Switch name="three" text="Third section" disabled={disabled} />
  </ContentSwitcher>
);

lowContrast.args = {
  ...sharedArgs,
  lowContrast: true,
};
lowContrast.argTypes = {
  ...sharedArgTypes,
  lowContrast: {
    ...sharedArgTypes.lowContrast,
    table: {
      ...sharedArgTypes.lowContrast.table,
      readonly: true,
    },
  },
};
