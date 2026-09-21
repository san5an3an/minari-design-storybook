// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Dialog, DialogControls, DialogCloseButton, DialogBody, DialogHeader, DialogSubtitle, DialogTitle, DialogFooter } from '@carbon/react/es/components/Dialog/Dialog.js';
import { Button } from '@carbon/react';
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

export const DangerDialog = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}> Toggle open</Button>
      <Dialog {...args} open={open} onRequestClose={() => setOpen(false)}>
        <DialogHeader>
          <DialogSubtitle>Account resources</DialogSubtitle>
          <DialogTitle>
            Are you sure you want to delete this custom domain?
          </DialogTitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter
          danger
          primaryButtonText="Delete"
          secondaryButtonText="Cancel"
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => {
            setOpen(false);
          }}
        />
      </Dialog>
    </>
  );
};

DangerDialog.args = {
  modal: true,
};
