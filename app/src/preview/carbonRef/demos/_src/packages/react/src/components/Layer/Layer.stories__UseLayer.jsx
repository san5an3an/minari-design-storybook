// @ts-nocheck
import './Layer-story.scss';
import { Layer, useLayer } from '@carbon/react';
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

export const UseLayer = ({ label }) => {
  function ExampleComponent() {
    const { level } = useLayer();
    return (
      <div style={{ padding: '1rem', background: 'var(--cds-layer)' }}>
        {label}: {level}
      </div>
    );
  }

  return (
    <>
      <ExampleComponent />
      <Layer>
        <ExampleComponent />
      </Layer>
    </>
  );
};

UseLayer.args = {
  label: 'Current layer level',
};
UseLayer.argTypes = contentArgTypes;
UseLayer.parameters = contentParameters;

UseLayer.story = {
  name: 'useLayer',
};
