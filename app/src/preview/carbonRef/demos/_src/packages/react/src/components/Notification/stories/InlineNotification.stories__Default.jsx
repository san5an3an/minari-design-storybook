// @ts-nocheck
import { InlineNotification } from '@carbon/react';
import { action } from '../../../../../../_doc-stubs/storybook-actions.js';
import mdx from '../Notification.mdx';


// eslint-disable-next-line storybook/csf-component
export default {
  title: 'Components/Notifications/Inline',
  component: InlineNotification,
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

export const Default = (args) => <InlineNotification {...args} />;

Default.argTypes = {
  onClose: {
    action: 'onClose',
  },
  onCloseButtonClick: {
    action: 'onCloseButtonClick',
  },
};
Default.args = {
  title: 'Notification title',
  subtitle: 'Subtitle text goes here',
};
