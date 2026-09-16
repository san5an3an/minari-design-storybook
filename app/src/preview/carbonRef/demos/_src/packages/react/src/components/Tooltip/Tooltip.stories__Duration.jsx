import './story.scss';
import { Tooltip } from '@carbon/react';
import mdx from './Tooltip.mdx';
import { Button } from '@carbon/react';


export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    align: {
      options: [
        'top',
        'top-start',
        'top-end',

        'bottom',
        'bottom-start',
        'bottom-end',

        'left',
        'left-end',
        'left-start',

        'right',
        'right-end',
        'right-start',
      ],
      control: {
        type: 'select',
      },
    },
    highContrast: {
      table: {
        disable: true,
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (context.name.toLowerCase().includes('auto align')) {
        return <Story />;
      }
      return (
        <div className="sb-tooltip-story">
          <Story />
        </div>
      );
    },
  ],
};

// Note: autoAlign is used here only to make tooltips visible in StackBlitz,
// autoAlign is in preview and not part of the actual implementation.
export const Duration = (args) => {
  return (
    <Tooltip
      autoAlign
      label="Label one"
      enterDelayMs={0}
      leaveDelayMs={300}
      {...args}>
      <Button>This button has a tooltip</Button>
    </Tooltip>
  );
};
