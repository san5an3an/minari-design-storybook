// @ts-nocheck
import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { Modal } from '@carbon/react';
import { Button } from '@carbon/react';
import { Select } from '@carbon/react';
import { MultiSelect } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { ComboBox } from '@carbon/react';
import mdx from './Modal.mdx';
import { Checkbox } from '@carbon/react';
import { CheckboxGroup } from '@carbon/react';


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

export const Default = ({ numberOfButtons, ...args }) => {
  const [open, setOpen] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        onRequestClose={(e) => {
          action(e);
          setOpen(false);
        }}
        modalHeading="Add a custom domain"
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        aria-label="Modal content"
        open={open}
        {...args}
        {...modalFooter(numberOfButtons)}>
        <p style={{ marginBottom: '2rem' }}>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Domain name"
          placeholder="For example, GitHub.com"
          style={{ marginBottom: '24px' }}
        />
        <div style={{ marginBottom: '24px' }}>
          <Select id="select-1" defaultValue="us-south" labelText="Region">
            <SelectItem value="us-south" text="US South" />
            <SelectItem value="us-east" text="US East" />
          </Select>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ComboBox
            allowCustomValue
            autoAlign={true}
            id="carbon-combobox"
            items={['Viewer', 'Editor', 'Manager']}
            titleText="Permissions (Example of Floating UI)"
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Dropdown
            autoAlign={true}
            id="default"
            titleText="TLS (Example of Floating UI)"
            label="Option 1"
            items={[
              {
                id: 'option-0',
                text: '1.0',
              },
              {
                id: 'option-1',
                text: '1.1',
              },
              {
                id: 'option-2',
                text: '1.2',
              },
            ]}
            itemToString={(item) => (item ? item.text : '')}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <MultiSelect
            id="test"
            label="Choose options"
            titleText="Mapping domain"
            autoAlign
            items={[
              {
                id: 'downshift-1-item-0',
                text: 'Cloud Foundry',
              },
              {
                id: 'downshift-1-item-1',
                text: 'Kubernetes Ingress',
              },
              {
                id: 'downshift-1-item-2',
                text: 'VPC Load Balancer',
              },
            ]}
            itemToString={(item) => (item ? item.text : '')}
          />
        </div>
        <CheckboxGroup legendText="Terms of Agreement">
          <Checkbox
            id="checkbox-label-1"
            labelText="I confirm domain ownership and accept IBM service terms and applicable charges."
          />
        </CheckboxGroup>
      </Modal>
    </>
  );
};

Default.argTypes = {
  onSecondarySubmit: {
    action: 'onSecondarySubmit',
  },
};

Default.parameters = { ...sharedParameters };
