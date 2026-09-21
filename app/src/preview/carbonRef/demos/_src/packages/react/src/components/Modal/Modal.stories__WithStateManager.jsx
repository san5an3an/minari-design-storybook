// @ts-nocheck
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
import { Modal } from '@carbon/react';
import { Button } from '@carbon/react';
import { Select } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { TextInput } from '@carbon/react';
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

const modalFooter = (numberOfButtons) => {
  const secondaryButtons = () => {
    switch (numberOfButtons) {
      case '1':
        return {
          secondaryButtons: [],
        };
      case '2':
        return {
          secondaryButtonText: 'Cancel',
        };
      case '3':
        return {
          secondaryButtons: [
            {
              buttonText: 'Keep both',
              onClick: action('onClick'),
            },
            {
              buttonText: 'Rename',
              onClick: action('onClick'),
            },
          ],
        };
      default:
        return null;
    }
  };
  return {
    ...secondaryButtons(),
  };
};

const sharedParameters = {
  controls: {
    exclude: [
      'id',
      'launcherButtonRef',
      'secondaryButtons',
      'secondaryButtonText',
      'selectorPrimaryFocus',
      'selectorsFloatingMenus',
    ],
  },
};

export const WithStateManager = ({ numberOfButtons, ...args }) => {
  /**
   * Simple state manager for modals.
   */
  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent,
  }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        {!ModalContent || typeof document === 'undefined'
          ? null
          : ReactDOM.createPortal(
              <ModalContent open={open} setOpen={setOpen} />,
              document.body
            )}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
      </>
    );
  };

  const button = React.useRef();

  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button ref={button} onClick={() => setOpen(true)}>
          Launch modal
        </Button>
      )}>
      {({ open, setOpen }) => (
        <Modal
          launcherButtonRef={button}
          modalHeading="Add a custom domain"
          modalLabel="Account resources"
          primaryButtonText="Add"
          secondaryButtonText="Cancel"
          open={open}
          onRequestClose={() => setOpen(false)}
          {...args}
          {...modalFooter(numberOfButtons)}>
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
        </Modal>
      )}
    </ModalStateManager>
  );
};

WithStateManager.parameters = { ...sharedParameters };
