// @ts-nocheck
import { InlineLoading } from '@carbon/react';
import mdx from './InlineLoading.mdx';
import { action } from 'storybook/actions';


export default {
  title: 'Components/InlineLoading',
  component: InlineLoading,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sharedArgTypes = {
  description: {
    control: {
      type: 'text',
    },
  },
  iconDescription: {
    control: {
      type: 'text',
    },
  },
  successDelay: {
    control: {
      type: 'number',
    },
  },
  status: {
    options: ['inactive', 'active', 'error', 'finished'],
    control: {
      type: 'select',
    },
  },
  onSuccess: {
    action: 'onSuccess',
  },
  'aria-live': {
    control: {
      type: 'text',
    },
  },
};

export const Default = (args) => <InlineLoading {...args} />;

Default.args = {
  description: 'Loading',
  iconDescription: 'Loading data...',
  status: 'active',
  onSuccess: action('onSuccess'),
  'aria-live': 'assertive',
};

Default.parameters = {
  controls: {
    exclude: ['successDelay'],
  },
};

Default.argTypes = { ...sharedArgTypes };
