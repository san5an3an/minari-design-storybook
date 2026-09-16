import { WithLayer } from '../../../.storybook/templates/WithLayer';
import { SelectItem } from '@carbon/react';
import { TimePicker } from '@carbon/react';
import { TimePickerSelect } from '@carbon/react';
import mdx from './TimePicker.mdx';


export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  subcomponents: {
    TimePickerSelect,
    SelectItem,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['inputClassName', 'pickerClassName', 'id', 'light', 'pattern'],
    },
  },
};

export const _WithLayer = () => (
  <WithLayer>
    {(layer) => (
      <TimePicker id={`time-picker-${layer}`} labelText="Select a time">
        <TimePickerSelect id={`time-picker-select-${layer}-1`}>
          <SelectItem value="AM" text="AM" />
          <SelectItem value="PM" text="PM" />
        </TimePickerSelect>
        <TimePickerSelect id={`time-picker-select-${layer}-2`}>
          <SelectItem value="Time zone 1" text="Time zone 1" />
          <SelectItem value="Time zone 2" text="Time zone 2" />
        </TimePickerSelect>
      </TimePicker>
    )}
  </WithLayer>
);
