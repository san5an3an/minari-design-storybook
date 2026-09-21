// @ts-nocheck
import { ToastNotification } from '@carbon/react';
import { action } from '../../../../../../_doc-stubs/storybook-actions.js';
import mdx from '../Notification.mdx';


// eslint-disable-next-line storybook/csf-component
export default {
  title: 'Components/Notifications/Toast',
  component: ToastNotification,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['actionButtonLabel', 'aria-label'],
    },
  },
  args: {
    kind: 'error',
    lowContrast: false,
    hideCloseButton: false,
    ['aria-label']: 'closes notification',
    statusIconDescription: 'notification',
    onClose: action('onClose'),
    onCloseButtonClick: action('onCloseButtonClick'),
  },
};

export const Default = (args) => <ToastNotification {...args} />;

Default.argTypes = {
  onClose: {
    action: 'onClose',
  },
  onCloseButtonClick: {
    action: 'onCloseButtonClick',
  },
};
Default.args = {
  role: 'status',
  caption: '00:00:00 AM',
  timeout: 0,
  title: 'Notification title',
  subtitle: 'Subtitle text goes here',
};
