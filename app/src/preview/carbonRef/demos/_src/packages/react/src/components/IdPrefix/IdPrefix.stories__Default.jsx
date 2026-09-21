// @ts-nocheck
import { IdPrefix } from '@carbon/react';
import { useIdPrefix } from '@carbon/react';
import mdx from './IdPrefix.mdx';


export default {
  title: 'Components/IdPrefix',
  component: IdPrefix,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  function ExampleComponent() {
    const idPrefix = useIdPrefix();
    return <p>The current id prefix is: {idPrefix}</p>;
  }

  return (
    <>
      <ExampleComponent />
      <IdPrefix prefix="custom">
        <ExampleComponent />
      </IdPrefix>
    </>
  );
};
