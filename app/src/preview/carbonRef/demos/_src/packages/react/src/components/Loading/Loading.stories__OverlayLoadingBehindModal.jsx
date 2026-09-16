import React, { useEffect, useRef, useState } from 'react';
import { Loading } from '@carbon/react';
import mdx from './Loading.mdx';
import { Button } from '@carbon/react';
import { Modal } from '@carbon/react';


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

export const OverlayLoadingBehindModal = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const launcherButtonRef = useRef(null);

  const { isActive: isLoadingActive, startLoading } = useStartLoading();

  return (
    <main>
      <Button ref={launcherButtonRef} onClick={() => setIsModalOpen(true)}>
        Open modal
      </Button>
      <Modal
        open={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onRequestSubmit={startLoading}
        launcherButtonRef={launcherButtonRef}
        modalHeading="Account settings"
        primaryButtonText="Save"
        secondaryButtonText="Cancel">
        <p>
          Select <strong>Save</strong> to trigger a two second loading state
          behind this modal. The overlay is the layer below, so it leaves focus
          alone. Focus stays on <strong>Save</strong> and Tab keeps cycling
          through the modal instead of moving to the overlay.
        </p>
      </Modal>
      <Loading {...args} active={isLoadingActive} withOverlay />
    </main>
  );
};

OverlayLoadingBehindModal.storyName = 'Overlay Loading Behind Modal';

OverlayLoadingBehindModal.argTypes = {
  small: sharedArgTypes.small,
  description: sharedArgTypes.description,
};
