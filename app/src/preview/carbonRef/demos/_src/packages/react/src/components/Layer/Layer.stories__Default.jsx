// @ts-nocheck
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

export const Default = ({ label }) => {
  function TestComponent() {
    return <div className="example-layer-test-component">{label}</div>;
  }

  return (
    <>
      <TestComponent />
      <Layer>
        <TestComponent />
        <Layer>
          <TestComponent />
        </Layer>
      </Layer>
    </>
  );
};

Default.args = {
  label: 'Workspace settings',
};
Default.argTypes = contentArgTypes;
Default.parameters = contentParameters;
