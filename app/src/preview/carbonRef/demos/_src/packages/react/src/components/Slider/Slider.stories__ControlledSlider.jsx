// @ts-nocheck
import React, { useState } from 'react';
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

export const ControlledSlider = () => {
  const [val, setVal] = React.useState(87);
  return (
    <>
      <button
        type="button"
        onClick={() => setVal(Math.round(Math.random() * 100))}>
        randomize value
      </button>
      <Slider
        labelText="Slider label"
        max={100}
        min={0}
        value={val}
        onChange={({ value }) => setVal(value)}
      />
      <h1>{val}</h1>
    </>
  );
};
