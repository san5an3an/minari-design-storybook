// @ts-nocheck
import React, { useState } from 'react';
import { ComposedModal, ModalBody } from '@carbon/react';
import { ModalHeader } from '@carbon/react';
import { ModalFooter } from '@carbon/react';
import { Button } from '@carbon/react';
import mdx from './ComposedModal.mdx';


export default {
  title: 'Components/ComposedModal',
  component: ComposedModal,
  subcomponents: {
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: [
        'containerClassName',
        'launcherButtonRef',
        'selectorPrimaryFocus',
        'selectorsFloatingMenus',
      ],
    },
  },
};

export const PassiveModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal open={open} onClose={() => setOpen(false)}>
        <ModalHeader title="You have been successfully signed out" />
        <ModalBody />
      </ComposedModal>
    </>
  );
};
