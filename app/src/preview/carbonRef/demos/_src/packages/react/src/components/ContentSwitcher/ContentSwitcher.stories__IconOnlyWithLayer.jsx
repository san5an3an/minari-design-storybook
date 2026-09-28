import { WithLayer } from '../../../.storybook/templates/WithLayer';
import { ContentSwitcher } from '@carbon/react';
import { Switch, IconSwitch } from '@carbon/react';
import mdx from './ContentSwitcher.mdx';
import { TableOfContents, Workspace, ViewMode_2 } from '@carbon/icons-react';


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

export const IconOnlyWithLayer = ({ disabled, ...args }) => (
  <WithLayer>
    <ContentSwitcher {...args}>
      <IconSwitch name="one" text="Table of Contents" disabled={disabled}>
        <TableOfContents />
      </IconSwitch>
      <IconSwitch name="two" text="Workspace Test" disabled={disabled}>
        <Workspace />
      </IconSwitch>
      <IconSwitch name="three" text="View Mode" disabled={disabled}>
        <ViewMode_2 />
      </IconSwitch>
    </ContentSwitcher>
  </WithLayer>
);

IconOnlyWithLayer.args = { ...sharedArgs };
IconOnlyWithLayer.argTypes = { ...sharedArgTypes };
