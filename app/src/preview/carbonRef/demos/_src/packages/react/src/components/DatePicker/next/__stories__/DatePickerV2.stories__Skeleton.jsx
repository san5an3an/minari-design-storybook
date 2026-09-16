import { DatePicker } from '@carbon/react/es/components/DatePicker/next/components/DatePicker.js';
import { DatePickerInput } from '@carbon/react/es/components/DatePicker/next/components/DatePickerInput.js';
import { DatePickerSkeleton } from '@carbon/react/es/components/DatePicker/next/components/DatePickerSkeleton.js';
import mdx from './DatePickerV2.mdx';


export default {
  title: 'Preview/preview__DatePicker',
  component: DatePicker,
  subcomponents: {
    DatePickerInput,
  },

  parameters: {
    docs: {
      page: mdx,
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

export const Skeleton = () => <DatePickerSkeleton range />;

Skeleton.parameters = {
  percy: {
    skip: true,
  },
};
