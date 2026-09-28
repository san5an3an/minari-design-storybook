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

export const TwoHandleSlider = () => {
  return (
    <Slider
      ariaLabelInput="Lower bound"
      unstable_ariaLabelInputUpper="Upper bound"
      labelText="Slider label"
      value={10}
      unstable_valueUpper={90}
      min={0}
      max={100}
      step={1}
      stepMultiplier={10}
      invalidText="Invalid message goes here"
    />
  );
};
