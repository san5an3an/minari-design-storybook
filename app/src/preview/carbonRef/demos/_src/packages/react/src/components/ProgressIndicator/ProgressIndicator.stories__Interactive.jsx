// @ts-nocheck
import { ProgressIndicator, ProgressStep, ProgressIndicatorSkeleton } from '@carbon/react';
import mdx from './ProgressIndicator.mdx';


export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  subcomponents: {
    ProgressStep,
    ProgressIndicatorSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Interactive = () => {
  return (
    <ProgressIndicator currentIndex={1} onChange={() => alert('Clicked')}>
      <ProgressStep
        label="Click me"
        description="Step 1: Register an onChange event"
      />
      <ProgressStep
        label="Really long label"
        description="The progress indicator will listen for clicks on the steps"
      />
      <ProgressStep
        label="Third step"
        description="The progress indicator will listen for clicks on the steps"
      />
    </ProgressIndicator>
  );
};
