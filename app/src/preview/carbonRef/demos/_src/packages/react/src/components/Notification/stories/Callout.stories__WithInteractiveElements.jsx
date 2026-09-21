// @ts-nocheck
import { Callout } from '@carbon/react';
import { Link } from '@carbon/react';
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

export const WithInteractiveElements = () => (
  <Callout
    title="Notification title"
    titleId="my fancy id 123"
    kind="info"
    lowContrast>
    <div className="cds--inline-notification__subtitle">
      Additional text can describe the notification, or a link to{' '}
      <Link inline href="#" aria-describedby="my fancy id 123">
        learn more
      </Link>
    </div>
  </Callout>
);
