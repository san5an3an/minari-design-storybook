import React, { useEffect, useRef, useState } from 'react';
import { Loading } from '@carbon/react';
import mdx from './Loading.mdx';
import { Button } from '@carbon/react';


export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    docs: {
      page: mdx,
    },
    // The id prop is deprecated and should be remove in the next major release
    controls: {
      exclude: ['id'],
    },
  },
};

const sharedArgTypes = {
  active: {
    control: {
      type: 'boolean',
    },
  },
  withOverlay: {
    control: {
      type: 'boolean',
    },
  },
  small: {
    control: {
      type: 'boolean',
    },
  },
  description: {
    control: {
      type: 'text',
    },
  },
};

const OVERLAY_LOADING_DURATION_MS = 2000;

const useStartLoading = () => {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef(null);

  const startLoading = () => {
    clearTimeout(timeoutRef.current);
    setIsActive(true);
    timeoutRef.current = setTimeout(
      () => setIsActive(false),
      OVERLAY_LOADING_DURATION_MS
    );
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return { isActive, startLoading };
};

export const OverlayLoading = (args) => {
  const { isActive, startLoading } = useStartLoading();

  return (
    <main>
      <Button onClick={startLoading}>Start</Button>
      <Loading {...args} active={isActive} withOverlay />
    </main>
  );
};

OverlayLoading.argTypes = {
  small: sharedArgTypes.small,
  description: sharedArgTypes.description,
};
