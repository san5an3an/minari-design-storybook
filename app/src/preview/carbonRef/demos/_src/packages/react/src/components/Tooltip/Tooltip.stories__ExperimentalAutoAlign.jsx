// @ts-nocheck
import './story.scss';
import React, { useRef, useEffect } from 'react';
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

export const ExperimentalAutoAlign = (args) => {
  const ref = useRef();
  const tooltipLabel =
    'Scroll the container up, down, left or right to observe how the tooltip will automatically change its position in attempt to stay within the viewport. This works on initial render in addition to on scroll.';

  useEffect(() => {
    ref?.current?.scrollIntoView({ block: 'center', inline: 'center' });
  });
  return (
    <div style={{ width: '5000px', height: '5000px' }}>
      <div
        style={{
          position: 'absolute',
          top: '2500px',
          left: '2500px',
        }}>
        <Tooltip label={tooltipLabel} align="top" autoAlign {...args}>
          <Button ref={ref}>This button has a tooltip</Button>
        </Tooltip>
      </div>
    </div>
  );
};
