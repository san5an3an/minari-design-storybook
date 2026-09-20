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

export const CustomLevel = ({ label, level }) => {
  function TestComponent() {
    return <div className="example-layer-test-component">{label}</div>;
  }

  return (
    <Layer level={level}>
      <TestComponent />
    </Layer>
  );
};

CustomLevel.args = {
  label: 'Workspace settings',
  level: 2,
};
CustomLevel.argTypes = {
  ...contentArgTypes,
  level: {
    control: { type: 'select' },
    options: [0, 1, 2],
  },
};
CustomLevel.parameters = {
  controls: {
    include: ['label', 'level'],
  },
};
