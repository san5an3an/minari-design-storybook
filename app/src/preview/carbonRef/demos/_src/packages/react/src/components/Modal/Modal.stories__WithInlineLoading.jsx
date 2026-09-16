import React, { useState } from 'react';
import { Modal } from '@carbon/react';
import { Button } from '@carbon/react';
import mdx from './Modal.mdx';


const buttons = {
  'One (1)': '1',
  'Two (2)': '2',
  'Three (3)': '3',
};

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    'aria-label': {
      control: 'text',
    },
    modalHeading: {
      control: 'text',
    },
    modalLabel: {
      control: 'text',
    },
    dangerDescription: {
      control: 'text',
    },
    numberOfButtons: {
      description: 'Count of Footer Buttons',
      options: Object.keys(buttons),
      mapping: buttons,
      control: {
        type: 'inline-radio',
        labels: Object.keys(buttons),
      },
    },
    onKeyDown: {
      action: 'onKeyDown',
    },
    onRequestSubmit: {
      action: 'onRequestSubmit',
    },

    preventCloseOnClickOutside: {
      control: 'boolean',
    },
    primaryButtonText: {
      control: 'text',
    },
  },
};

export const WithInlineLoading = (args) => {
  const [status, setStatus] = useState('inactive');
  const [description, setDescription] = useState('Deleting...');

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

    setDescription('Deleted!');
    setStatus('finished');
  };

  const resetStatus = () => {
    setStatus('inactive');
    setDescription('Deleting...');
  };

  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        open={open}
        danger
        modalHeading="Are you sure you want to delete this custom domain?"
        modalLabel="Account resources"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        loadingStatus={status}
        loadingDescription={description}
        {...args}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={submit}
        onLoadingSuccess={resetStatus}
      />
    </>
  );
};

WithInlineLoading.parameters = {
  controls: {
    exclude: [
      'loadingStatus',
      'loadingDescription',
      'numberOfButtons',
      'id',
      'launcherButtonRef',
      'secondaryButtons',
      'secondaryButtonText',
      'selectorPrimaryFocus',
      'selectorsFloatingMenus',
    ],
  },
};
