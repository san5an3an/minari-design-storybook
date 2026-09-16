import './Layer-story.scss';
import { Layer } from '@carbon/react';
import mdx from './Layer.mdx';


export default {
  title: 'Components/Layer',
  component: Layer,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
    docs: {
      page: mdx,
    },
  },
};

const contentArgTypes = {
  label: {
    control: { type: 'text' },
  },
};

const contentParameters = {
  controls: {
    include: ['label'],
  },
};

export const withBackground = ({ label }) => {
  function TestComponent() {
    return (
      <div className="example-layer-test-component-no-background">{label}</div>
    );
  }

  return (
    <>
      <TestComponent />
      <Layer withBackground>
        <TestComponent />
        <Layer withBackground>
          <TestComponent />
        </Layer>
      </Layer>
    </>
  );
};

withBackground.args = {
  label: 'Workspace settings',
};
withBackground.argTypes = contentArgTypes;
withBackground.parameters = contentParameters;
