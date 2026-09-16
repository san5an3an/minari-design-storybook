import mdx from './TextInput.mdx';
import { TextInput, TextInputSkeleton } from '@carbon/react';


export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    TextInputSkeleton,
  },
  args: {
    className: 'input-test-class',
    id: 'text-input-1',
    placeholder: 'Placeholder text',
    invalid: false,
    invalidText: 'Error message goes here',
    disabled: false,
    labelText: 'Label text',
    helperText: 'Helper text',
    warn: false,
    warnText:
      'Warning message that is really long can wrap to more lines but should not be excessively long.',
    size: 'md',
    readOnly: false,
    inline: false,
    hideLabel: false,
    enableCounter: false,
    maxCount: 10,
    type: 'text',
    defaultWidth: 300,
    defaultValue: '',
  },
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    defaultValue: {
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
    labelText: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
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
    value: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      action: 'onChange',
    },
    onClick: {
      action: 'onClick',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    type: {
      control: {
        type: 'text',
      },
    },
    id: {
      control: { type: 'text' },
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
    },
    inline: {
      control: {
        type: 'boolean',
      },
    },
    hideLabel: {
      control: {
        type: 'boolean',
      },
    },
    enableCounter: {
      control: {
        type: 'boolean',
      },
    },
    maxCount: {
      control: {
        type: 'number',
      },
    },
    light: {
      table: {
        disable: true,
      },
    },
    slug: {
      table: {
        disable: true,
      },
    },
    defaultWidth: {
      control: { type: 'range', min: 300, max: 800, step: 50 },
    },
  },
};

// Hidden Test-Only Story. This story tests for a bug where the invalid-text would overlap with components below it. #19960
export const TestInvalidTextNoOverlap = (args) => {
  return (
    <div style={{ width: args.defaultWidth }}>
      <TextInput
        labelText="test invalid text, the invalid text should not overlap"
        invalid
        invalidText="invalid text, this should not overlap with the component below"
        id="text-input-1"
        type="text"
      />
      <TextInput labelText="test label" id="text-input-2" type="text" />
    </div>
  );
};

/*
 * This story will:
 * - Be excluded from the docs page
 * - Removed from the sidebar navigation
 * - Still be a tested variant
 */
TestInvalidTextNoOverlap.tags = ['!dev', '!autodocs'];
