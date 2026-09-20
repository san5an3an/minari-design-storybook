// @ts-nocheck
import { FluidSelect, FluidSelectSkeleton } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { ToggletipLabel, Toggletip, ToggletipButton, ToggletipContent } from '@carbon/react';
import { Information, View, FolderOpen, Folders } from '@carbon/icons-react';
import mdx from './FluidSelect.mdx';


export default {
  title: 'Components/Fluid Components/FluidSelect',
  component: FluidSelect,
  subcomponents: {
    FluidSelectSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['defaultValue', 'id'],
    },
  },
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
  },
};

const sharedArgTypes = {
  className: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  invalid: {
    control: {
      type: 'boolean',
    },
  },
  invalidText: {
    control: {
      type: 'text',
    },
  },
  labelText: {
    control: {
      type: 'text',
    },
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: {
      type: 'boolean',
    },
  },
  warn: {
    control: {
      type: 'boolean',
    },
  },
  warnText: {
    control: {
      type: 'text',
    },
  },
};

const sharedArgs = {
  className: 'test-class',
  disabled: false,
  invalid: false,
  invalidText:
    'Error message that is really long can wrap to more lines but should not be excessively long.',
  labelText: 'Select an option',
  readOnly: false,
  warn: false,
  warnText:
    'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

const sharedControls = Object.keys(sharedArgTypes);
const widthArgType = {
  control: { type: 'range', min: 300, max: 800, step: 50 },
};

const ToggleTip = (
  <>
    <ToggletipLabel>Select an option</ToggletipLabel>
    <Toggletip align="top-left">
      <ToggletipButton label="Show information">
        <Information />
      </ToggletipButton>
      <ToggletipContent>
        <p>Additional field information here.</p>
      </ToggletipContent>
    </Toggletip>
  </>
);

export const Default = ({ defaultWidth, ...selectArgs }) => (
  <div style={{ width: defaultWidth }}>
    <FluidSelect {...selectArgs} id="select-1">
      <SelectItem value="" text="" />
      <SelectItem value="option-1" text="Option 1" />
      <SelectItem value="option-2" text="Option 2" />
      <SelectItem value="option-3" text="Option 3" />
      <SelectItem value="option-4" text="Option 4" />
    </FluidSelect>
  </div>
);

Default.args = {
  ...sharedArgs,
  defaultWidth: 400,
  labelText: ToggleTip,
};

Default.argTypes = {
  ...sharedArgTypes,
  defaultWidth: widthArgType,
};

Default.parameters = {
  controls: { include: [...sharedControls, 'defaultWidth'] },
};
