// @ts-nocheck
import { ClassPrefix } from '@carbon/react';
import { usePrefix } from '@carbon/react';
import mdx from './ClassPrefix.mdx';


export default {
  title: 'Components/ClassPrefix',
  component: ClassPrefix,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

function ExampleComponent() {
  const prefix = usePrefix();

  return <p>The current prefix is: {prefix}</p>;
}

export const Default = (args) => {
  return (
    <ClassPrefix {...args}>
      <ExampleComponent />
    </ClassPrefix>
  );
};

Default.args = {
  prefix: 'custom',
};
