// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Dialog, DialogControls, DialogCloseButton, DialogBody, DialogHeader, DialogTitle } from '@carbon/react/es/components/Dialog/Dialog.js';
import { Button } from '@carbon/react';
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
import mdx from './Dialog.mdx';


export default {
  title: 'Preview/preview__Dialog',
  component: Dialog,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: [
        'hasScrollingContent',
        'modal',
        'open',
        'focusAfterCloseRef',
        'ariaDescribedBy',
        'ariaLabelledBy',
      ],
    },
  },
};

export const PassiveDialog = ({ open: _open, ...args }) => {
  const [open, setOpen] = useState(_open);

  function toggleDialog() {
    setOpen(!open);
  }

  function closeDialog(e) {
    setOpen(false);
  }

  function handleRequestClose(e) {
    action('Dialog onRequestClose');
    closeDialog(e);
  }

  useEffect(() => {
    setOpen(_open);
  }, [_open]);

  return (
    <>
      <Button type="button" onClick={toggleDialog}>
        Toggle open
      </Button>
      <Dialog {...args} open={open} modal onRequestClose={handleRequestClose}>
        <DialogHeader>
          <DialogTitle>Information Message</DialogTitle>
          <DialogControls>
            <DialogCloseButton onClick={closeDialog} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p>You have been successfully signed out</p>
        </DialogBody>
      </Dialog>
    </>
  );
};
