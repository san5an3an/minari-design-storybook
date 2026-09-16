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

export const Skeleton = () => {
  return <SliderSkeleton />;
};
