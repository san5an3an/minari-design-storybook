import './story.scss';
import { Checkbox as CheckboxIcon } from '@carbon/icons-react';
import React, { useState, useEffect, useRef } from 'react';
import { Popover, PopoverContent } from '@carbon/react';
import mdx from './Popover.mdx';


export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverContent,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      exclude: ['relative'],
    },
    docs: {
      page: mdx,
    },
  },
};

const autoAlignArgTypes = {
  caret: {
    control: {
      type: 'boolean',
    },
  },
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
};
export const ExperimentalAutoAlignBoundary = (args) => {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  const [boundary, setBoundary] = useState();

  useEffect(() => {
    ref?.current?.scrollIntoView({ block: 'center', inline: 'center' });
  });

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        overflow: 'scroll',
        width: '800px',
        height: '500px',
        border: '1px',
        borderStyle: 'dashed',
        borderColor: 'var(--cds-border-strong, #8d8d8d)',
        margin: '0 auto',
      }}
      ref={setBoundary}>
      <div
        style={{
          width: '2100px',
          height: '1px',
          placeItems: 'center',
        }}
      />
      <div style={{ placeItems: 'center', height: '32px', width: '32px' }}>
        <Popover
          open={open}
          align="top"
          autoAlign
          autoAlignBoundary={boundary}
          onRequestClose={() => setOpen(false)}
          ref={ref}
          {...args}>
          <button
            className="playground-trigger"
            aria-label="Checkbox"
            type="button"
            aria-expanded={open}
            onClick={() => {
              setOpen(!open);
            }}>
            <CheckboxIcon />
          </button>
          <PopoverContent className="p-3">
            <div>
              <p className="popover-title">This popover uses autoAlign</p>
              <p className="popover-details">
                Scroll the container up, down, left or right to observe how the
                popover will automatically change its position in attempt to
                stay within the viewport. This works on initial render in
                addition to on scroll.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <div
          style={{
            height: '1000px',
            width: '1px',
            placeItems: 'center',
          }}
        />
      </div>
    </div>
  );
};

ExperimentalAutoAlignBoundary.argTypes = autoAlignArgTypes;
ExperimentalAutoAlignBoundary.parameters = {
  controls: {
    exclude: ['autoAlign', 'highContrast', 'isTabTip'],
  },
};
