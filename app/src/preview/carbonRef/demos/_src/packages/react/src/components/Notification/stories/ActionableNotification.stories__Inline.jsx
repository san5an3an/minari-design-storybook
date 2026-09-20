// @ts-nocheck
import { ActionableNotification } from '@carbon/react';
import { action } from '../../../../../../_doc-stubs/storybook-actions.js';
import mdx from '../Notification.mdx';


// eslint-disable-next-line storybook/csf-component
export default {
  title: 'Components/Notifications/Actionable',
  component: ActionableNotification,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['aria-label', 'hasFocus'],
    },
  },
  args: {
    actionButtonLabel: 'Action',
    inline: false,
    closeOnEscape: true,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    kind: 'error',
    lowContrast: false,
    hideCloseButton: false,
    ['aria-label']: 'close notification',
    statusIconDescription: 'notification',
    onClose: action('onClose'),
    onCloseButtonClick: action('onCloseButtonClick'),
    onActionButtonClick: action('onActionButtonClick'),
  },
  argTypes: {
    onActionButtonClick: {
      action: 'onActionButtonClick',
    },
    onClose: {
      action: 'onClose',
    },
    onCloseButtonClick: {
      action: 'onCloseButtonClick',
    },
  },
};

export const Default = (args) => (
  <ActionableNotification {...args}></ActionableNotification>
);

export const Inline = {
  ...Default,
  args: {
    inline: true,
  },
  tags: ['!dev', '!autodocs'],
};
