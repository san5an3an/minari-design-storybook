import { Edit, Notification } from '@carbon/icons-react';
import { IconButton } from '@carbon/react';
import mdx from './IconButton.mdx';


export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      exclude: ['badgeCount'],
    },
    docs: {
      page: mdx,
    },
    layout: 'centered',
  },
};

export const withBadgeIndicator = (args) => {
  return (
    <div style={{ margin: '3rem' }}>
      <IconButton
        label="Notification"
        kind="ghost"
        size="lg"
        autoAlign
        {...args}>
        <Notification />
      </IconButton>
    </div>
  );
};

withBadgeIndicator.args = {
  badgeCount: 4,
};
withBadgeIndicator.parameters = {
  controls: {
    exclude: ['size', 'kind'],
  },
};
