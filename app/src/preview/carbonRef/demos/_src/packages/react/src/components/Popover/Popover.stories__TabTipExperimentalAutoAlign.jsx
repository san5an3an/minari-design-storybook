// @ts-nocheck
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

export const TabTipExperimentalAutoAlign = () => {
  const [open, setOpen] = useState(true);
  const ref = useRef();

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
        <Popover open={open} align="bottom-right" autoAlign ref={ref} isTabTip>
          <div className="playground-trigger">
            <CheckboxIcon
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <PopoverContent className="p-3">
            <div>
              <p className="popover-title">
                This popover uses autoAlign with isTabTip
              </p>
              <p className="popover-details">
                Scroll the container up, down, left or right to observe how the
                popover will automatically change its position in attempt to
                stay within the viewport. This works on initial render in
                addition to on scroll.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
