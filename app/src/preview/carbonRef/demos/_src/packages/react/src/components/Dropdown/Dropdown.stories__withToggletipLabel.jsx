import { FolderOpen, Folders, Information, View } from '@carbon/icons-react';
import { Dropdown, DropdownSkeleton } from '@carbon/react';
import { Button } from '@carbon/react';
import { Toggletip, ToggletipActions, ToggletipButton, ToggletipContent, ToggletipLabel } from '@carbon/react';
import mdx from './Dropdown.mdx';
import { Link } from '@carbon/react';


const sharedArgs = {
  'aria-label': '',
  autoAlign: false,
  direction: 'bottom',
  disabled: false,
  helperText: 'Helper text',
  hideLabel: false,
  invalid: false,
  invalidText: 'Error message goes here',
  label: 'Choose an option',
  readOnly: false,
  size: 'md',
  titleText: 'Label',
  type: 'default',
  warn: false,
  warnText: 'Warning message goes here',
};

const sharedArgTypes = {
  'aria-label': {
    control: 'text',
  },
  autoAlign: {
    control: 'boolean',
  },
  direction: {
    control: 'select',
    options: ['top', 'bottom'],
  },
  invalid: {
    control: 'boolean',
  },
  invalidText: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  hideLabel: {
    control: 'boolean',
  },
  helperText: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: 'boolean',
  },
  warn: {
    control: 'boolean',
  },
  warnText: {
    control: 'text',
  },
  titleText: {
    control: 'text',
    type: {
      required: true,
    },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: 'select',
  },
  type: {
    control: 'select',
    options: ['default', 'inline'],
  },
};

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: {
    DropdownSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      include: Object.keys(sharedArgTypes),
    },
  },
};

export const withToggletipLabel = ({ titleText, ...args }) => {
  return (
    <div style={{ width: 400 }}>
      <Dropdown
        {...args}
        id="dropdown"
        items={[]}
        titleText={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ToggletipLabel>{titleText}</ToggletipLabel>
            <Toggletip>
              <ToggletipButton label="Show information">
                <Information />
              </ToggletipButton>
              <ToggletipContent>
                <p>
                  Lorem ipsum dolor sit amet, di os consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut fsil labore et dolore
                  magna aliqua.
                </p>
                <ToggletipActions>
                  <Link href="#">Link action</Link>
                  <Button size="sm">Button</Button>
                </ToggletipActions>
              </ToggletipContent>
            </Toggletip>
          </div>
        }
      />
    </div>
  );
};

withToggletipLabel.args = {
  ...sharedArgs,
  helperText: '',
  label: 'placeholder',
};
withToggletipLabel.argTypes = { ...sharedArgTypes };
