// @ts-nocheck
import React, { useState } from 'react';
import { ComposedModal, ModalBody } from '@carbon/react';
import { ModalHeader } from '@carbon/react';
import { ModalFooter } from '@carbon/react';
import { Select } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { TextInput } from '@carbon/react';
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

export const WithInlineLoading = () => {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState('inactive');
  const [description, setDescription] = useState('Submitting...');

  const fakePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const submit = async () => {
    setStatus('active');

    await fakePromise();

    setDescription('Submitted!');
    setStatus('finished');
  };

  const resetStatus = () => {
    setStatus('inactive');
    setDescription('Submitting...');
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal open={open} onClose={() => setOpen(false)}>
        <ModalHeader label="Account resources" title="Add a custom domain" />
        <ModalBody>
          <p style={{ marginBottom: '1rem' }}>
            Custom domains direct requests for your apps in this Cloud Foundry
            organization to a URL that you own. A custom domain can be a shared
            domain, a shared subdomain, or a shared domain and host.
          </p>
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="Domain name"
            placeholder="e.g. github.com"
            style={{ marginBottom: '1rem' }}
          />
          <Select id="select-1" defaultValue="us-south" labelText="Region">
            <SelectItem value="us-south" text="US South" />
            <SelectItem value="us-east" text="US East" />
          </Select>
        </ModalBody>
        <ModalFooter
          primaryButtonText="Add"
          secondaryButtonText="Cancel"
          loadingStatus={status}
          loadingDescription={description}
          onRequestSubmit={submit}
          onLoadingSuccess={resetStatus}
        />
      </ComposedModal>
    </>
  );
};
