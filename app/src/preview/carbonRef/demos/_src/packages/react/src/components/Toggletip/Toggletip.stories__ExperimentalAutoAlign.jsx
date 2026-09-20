// @ts-nocheck
import { Information } from '@carbon/icons-react';
import React, { useRef, useEffect } from 'react';
import { Button } from '@carbon/react';
import { Link } from '@carbon/react';
import { ToggletipLabel, Toggletip, ToggletipButton, ToggletipContent, ToggletipActions } from '@carbon/react';
import mdx from './Toggletip.mdx';


export default {
  title: 'Components/Toggletip',
  component: Toggletip,
  subcomponents: {
    ToggletipLabel,
    ToggletipButton,
    ToggletipContent,
    ToggletipActions,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const ExperimentalAutoAlign = () => {
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
          inlineSize: '8rem',
        }}>
        <ToggletipLabel>Toggletip label</ToggletipLabel>
        <Toggletip align="bottom" autoAlign defaultOpen>
          <ToggletipButton label="Show information">
            <Information ref={ref} />
          </ToggletipButton>
          <ToggletipContent>
            <p>
              Scroll the container up, down, left or right to observe how the
              Toggletip will automatically change its position in attempt to
              stay within the viewport. This works on initial render in addition
              to on scroll.
            </p>
            <ToggletipActions>
              <Link href="#">Link action</Link>
              <Button size="sm">Button</Button>
            </ToggletipActions>
          </ToggletipContent>
        </Toggletip>
      </div>
    </div>
  );
};
