// @ts-nocheck
import { Slider, SliderSkeleton } from '@carbon/react';
import mdx from './Slider.mdx';


export default {
  title: 'Components/Slider',
  component: Slider,
  subcomponents: {
    SliderSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const SliderWithCustomValueLabel = () => {
  return (
    <Slider
      labelText="Slider label with low/medium/high"
      value={50}
      min={0}
      max={100}
      stepMultiplier={50}
      step={1}
      noValidate
      hideTextInput
      formatLabel={(val) => {
        if (val < 25) {
          return 'Low';
        } else if (val > 75) {
          return 'High';
        }
        return 'Medium';
      }}
    />
  );
};
