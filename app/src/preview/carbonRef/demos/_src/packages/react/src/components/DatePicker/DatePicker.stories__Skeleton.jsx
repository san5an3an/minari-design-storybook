// @ts-nocheck
import { DatePicker } from '@carbon/react';
import { DatePickerSkeleton } from '@carbon/react';
import { DatePickerInput } from '@carbon/react';
import mdx from './DatePicker.mdx';


export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  subcomponents: {
    DatePickerInput,
    DatePickerSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: [
        'appendTo',
        'datePickerType',
        'disable',
        'enable',
        'inline',
        'locale',
        'value',
      ],
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

export const Skeleton = () => {
  return <DatePickerSkeleton range />;
};
