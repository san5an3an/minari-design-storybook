// @ts-nocheck
import { MenuItem, MenuItemDivider } from '@carbon/react';
import { CopyFile, Export } from '@carbon/icons-react';
import { ComboButton } from '@carbon/react';
import mdx from './ComboButton.mdx';


const sharedArgs = {
  disabled: false,
  label: 'Primary action',
  menuAlignment: 'bottom',
  size: 'lg',
  tooltipAlignment: 'top',
};

const sharedArgTypes = {
  disabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
  menuAlignment: {
    control: 'select',
    options: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
    ],
  },
  onClick: {
    action: 'onClick',
  },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md', 'lg'],
  },
  tooltipAlignment: {
    control: 'select',
    options: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ],
  },
};

const sharedParameters = {
  controls: {
    include: Object.keys(sharedArgTypes),
  },
};

export default {
  title: 'Components/ComboButton',
  component: ComboButton,
  subcomponents: {
    MenuItem,
    MenuItemDivider,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: mdx,
    },
    layout: 'centered',
  },
};

export const WithIcons = (args) => {
  return (
    <ComboButton {...args}>
      <MenuItem label="Save as a copy" renderIcon={CopyFile} />
      <MenuItem label="Export" renderIcon={Export} />
    </ComboButton>
  );
};

WithIcons.args = {
  ...sharedArgs,
  label: 'Save record',
};
WithIcons.argTypes = sharedArgTypes;
WithIcons.parameters = sharedParameters;
