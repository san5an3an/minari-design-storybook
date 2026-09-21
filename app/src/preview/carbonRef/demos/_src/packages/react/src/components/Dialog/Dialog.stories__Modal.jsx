// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { VStack } from '@carbon/react';
import { Dialog, DialogControls, DialogCloseButton, DialogBody, DialogHeader, DialogSubtitle, DialogTitle, DialogFooter } from '@carbon/react/es/components/Dialog/Dialog.js';
import { Button } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Select } from '@carbon/react';
import { SelectItem } from '@carbon/react';
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

export const Modal = ({ open: _open, ...args }) => {
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
      <Dialog {...args} open={open} onRequestClose={handleRequestClose}>
        <DialogHeader>
          <DialogSubtitle>Configure dialog settings</DialogSubtitle>
          <DialogTitle id="title">Modal Dialog Example</DialogTitle>
          <DialogControls>
            <DialogCloseButton onClick={closeDialog} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <VStack>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <TextInput
              id="dialog-text-input"
              labelText="Name"
              placeholder="Enter your name"
            />
            <Select
              id="dialog-select"
              labelText="Region"
              defaultValue="us-south">
              <SelectItem value="us-south" text="US South" />
              <SelectItem value="us-east" text="US East" />
            </Select>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
            <p>
              Elit hic at labore culpa itaque fugiat. Consequuntur iure autem
              autem officiis dolores facilis nulla earum! Neque quia nemo sequi
              assumenda ratione officia Voluptate beatae eligendi placeat nemo
              laborum, ratione.
            </p>
          </VStack>
        </DialogBody>
        <DialogFooter>
          <Button type="button" kind="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="button" kind="primary" onClick={closeDialog}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
Modal.args = {
  modal: true,
  open: true,
};
