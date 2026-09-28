// @ts-nocheck
import { CopyButton } from '@carbon/react';
import mdx from './CopyButton.mdx';


const defaultArgs = {
  align: 'bottom',
  autoAlign: true,
  disabled: false,
  feedback: 'Copied!',
  feedbackTimeout: 2000,
  iconDescription: 'Copy to clipboard',
};

const argTypes = {
  align: {
    control: 'select',
    options: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ],
  },
  autoAlign: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  feedback: {
    control: 'text',
  },
  feedbackTimeout: {
    control: { type: 'number', min: 1, step: 1 },
  },
  iconDescription: {
    control: 'text',
  },
  onClick: {
    action: 'onClick',
  },
};

const parameters = {
  controls: {
    include: Object.keys(argTypes),
  },
};

export default {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// Note: autoAlign is used here only to make tooltips visible in StackBlitz,
// autoAlign is in preview and not part of the actual implementation.
export const Default = (args) => <CopyButton {...args} />;

Default.args = defaultArgs;
Default.argTypes = argTypes;
Default.parameters = parameters;
