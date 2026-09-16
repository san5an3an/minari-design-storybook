import { FluidTimePicker } from '@carbon/react';
import { FluidTimePickerSelect } from '@carbon/react';
import { FluidTimePickerSkeleton } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { ToggletipLabel, Toggletip, ToggletipButton, ToggletipContent } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import mdx from './FluidTimePicker.mdx';


export default {
  title: 'Components/Fluid Components/FluidTimePicker',
  component: FluidTimePicker,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidTimePickerSelect,
    FluidTimePickerSkeleton,
  },
};

const ToggleTip = (
  <>
    <ToggletipLabel>Clock</ToggletipLabel>
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

export const Default = (args) => {
  return (
    <div style={{ width: '350px' }}>
      <FluidTimePicker id="time-picker-1" {...args}>
        <FluidTimePickerSelect id="select-1" labelText={ToggleTip}>
          <SelectItem value="am" text="AM" />
          <SelectItem value="pm" text="PM" />
        </FluidTimePickerSelect>
        <FluidTimePickerSelect id="select-2" labelText="Timezone">
          <SelectItem value="et" text="Eastern Time (ET)" />
          <SelectItem value="ct" text="Central Time (CT)" />
          <SelectItem value="mt" text="Mountain Time (MT)" />
          <SelectItem value="pt" text="Pacific Time (PT)" />
        </FluidTimePickerSelect>
      </FluidTimePicker>
      <br />
      <br />
      <FluidTimePicker
        id="time-picker-2"
        labelText="Time"
        placeholder="hh:mm"
        {...args}>
        <FluidTimePickerSelect id="select-3" labelText={ToggleTip}>
          <SelectItem value="am" text="AM" />
          <SelectItem value="pm" text="PM" />
        </FluidTimePickerSelect>
      </FluidTimePicker>
    </div>
  );
};

Default.args = {
  labelText: 'Time',
  invalidText:
    'Error message that is really long can wrap to more lines but should not be excessively long.',
  placeholder: 'hh:mm',
  warnText:
    'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

Default.argTypes = {
  disabled: {
    control: { type: 'boolean' },
  },
  labelText: {
    control: { type: 'string' },
  },
  invalid: {
    control: { type: 'boolean' },
  },
  invalidText: {
    control: { type: 'text' },
  },
  placeholder: {
    control: { type: 'text' },
  },
  warn: {
    control: { type: 'boolean' },
  },
  warnText: {
    control: { type: 'text' },
  },
};
