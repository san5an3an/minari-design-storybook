// @ts-nocheck
import { Callout } from '@carbon/react';
import mdx from '../Notification.mdx';


export default {
  title: 'Components/Notifications/Callout',
  component: Callout,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    kind: 'info',
    lowContrast: false,
    statusIconDescription: 'notification',
  },
};

export const Default = (args) => (
  <Callout
    title="Notification title"
    subtitle="Subtitle text goes here"
    {...args}
  />
);

Default.argTypes = {
  kind: {
    options: ['info', 'warning'],
    control: { type: 'select' },
  },
};
