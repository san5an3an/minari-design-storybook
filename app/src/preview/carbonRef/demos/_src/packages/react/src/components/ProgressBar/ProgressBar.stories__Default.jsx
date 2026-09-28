// @ts-nocheck
import mdx from './ProgressBar.mdx';
import { ProgressBar } from '@carbon/react';


export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sharedArgs = {
  helperText: '75 MB of 100 MB',
  hideLabel: false,
  label: 'Uploading files',
  max: 100,
  size: 'big',
  status: 'active',
  type: 'default',
  value: 75,
};

const sharedArgTypes = {
  helperText: {
    control: { type: 'text' },
  },
  hideLabel: {
    control: { type: 'boolean' },
  },
  label: {
    control: { type: 'text' },
  },
  max: {
    control: { type: 'number' },
  },
  size: {
    options: ['small', 'big'],
    control: { type: 'select' },
  },
  status: {
    options: ['active', 'finished', 'error'],
    control: { type: 'select' },
  },
  type: {
    options: ['default', 'inline', 'indented'],
    control: { type: 'select' },
  },
  value: {
    control: { type: 'number' },
  },
};

export const Default = (args) => <ProgressBar {...args} />;

Default.args = {
  ...sharedArgs,
};

Default.argTypes = {
  ...sharedArgTypes,
};
