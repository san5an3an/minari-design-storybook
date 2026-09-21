// @ts-nocheck
import { RadioButton } from '@carbon/react';
import { RadioButtonGroup } from '@carbon/react';
import { RadioButtonSkeleton } from '@carbon/react';
import mdx from './RadioButton.mdx';


export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  subcomponents: {
    RadioButtonGroup,
    RadioButtonSkeleton,
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Skeleton = () => {
  return <RadioButtonSkeleton />;
};
