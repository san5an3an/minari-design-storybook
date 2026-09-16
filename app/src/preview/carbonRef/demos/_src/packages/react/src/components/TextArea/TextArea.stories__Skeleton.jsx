import { TextArea, TextAreaSkeleton } from '@carbon/react';
import mdx from './TextArea.mdx';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    TextAreaSkeleton,
  },
  argTypes: {
    className: {
      control: false,
    },
    cols: {
      control: {
        type: 'number',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    enableCounter: {
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    hideLabel: {
      control: {
        type: 'boolean',
      },
    },
    id: {
      control: false,
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
    maxCount: {
      control: {
        type: 'number',
      },
    },
    placeholder: {
      control: {
        type: 'text',
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
    value: {
      control: {
        type: 'text',
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
  },
  args: {
    enableCounter: false,
    helperText: 'TextArea helper text',
    labelText: 'TextArea label',
    maxCount: 500,
    disabled: false,
    hideLabel: false,
    invalid: false,
    invalidText:
      'Error message that is really long can wrap to more lines but should not be excessively long.',
    placeholder: '',
    rows: 4,
    warn: false,
    warnText: 'This is a warning message.',
  },
};

export const Skeleton = (args) => {
  return <TextAreaSkeleton {...args} />;
};
Skeleton.parameters = {
  controls: {
    include: ['hideLabel'],
  },
};
