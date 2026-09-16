import { WithLayer } from '../../../.storybook/templates/WithLayer';
import { FluidTextArea } from '@carbon/react';
import { FluidTextAreaSkeleton } from '@carbon/react';
import mdx from './FluidTextArea.mdx';


export default {
  title: 'Components/Fluid Components/FluidTextArea',
  component: FluidTextArea,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['id', 'value', 'defaultValue'],
    },
  },
  subcomponents: {
    FluidTextAreaSkeleton,
  },
  argTypes: {
    hideLabel: {
      table: {
        disable: true,
      },
    },
    helperText: {
      table: {
        disable: true,
      },
    },
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
  placeholder: {
    control: {
      type: 'text',
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
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  cols: {
    control: {
      type: 'number',
    },
  },
  defaultWidth: {
    control: { type: 'range', min: 300, max: 800, step: 50 },
  },
  enableCounter: {
    control: {
      type: 'boolean',
    },
  },
  labelText: {
    control: {
      type: 'text',
    },
  },
  maxCount: {
    control: {
      type: 'number',
    },
  },
  onChange: {
    action: 'onChange',
  },
  onClick: {
    action: 'onClick',
  },
  readOnly: {
    control: {
      type: 'boolean',
    },
  },
  rows: {
    control: {
      type: 'number',
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
  cols: 40,
  defaultWidth: 300,
  disabled: false,
  enableCounter: false,
  invalid: false,
  invalidText:
    'Error message that is really long can wrap to more lines but should not be excessively long.',
  labelText: 'Text Area label',
  maxCount: 500,
  placeholder: 'Placeholder text',
  readOnly: false,
  rows: 4,
  warn: false,
  warnText: 'This is a warning message.',
};

export const DefaultWithLayers = ({ defaultWidth, ...textAreaArgs }) => (
  <WithLayer>
    {(layer) => (
      <div style={{ width: defaultWidth }}>
        <FluidTextArea {...textAreaArgs} id={`text-area-${layer}`} />
      </div>
    )}
  </WithLayer>
);

DefaultWithLayers.args = {
  ...sharedArgs,
};

DefaultWithLayers.argTypes = {
  ...sharedArgTypes,
};
