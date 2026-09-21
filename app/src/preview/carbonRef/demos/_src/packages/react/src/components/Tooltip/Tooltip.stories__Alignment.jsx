// @ts-nocheck
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

export const Alignment = (args) => {
  return (
    <Tooltip label="Tooltip alignment" align="bottom-left" {...args}>
      <Button>This button has a tooltip</Button>
    </Tooltip>
  );
};
