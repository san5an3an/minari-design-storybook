import { VStack } from '@carbon/react';
import { Toggle } from '@carbon/react';
import mdx from './Toggle.mdx';


export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const WithAccessibleLabels = () => {
  return (
    <VStack gap={7}>
      <Toggle id="toggle-4" labelText="Label" />

      <Toggle id="toggle-5" labelText="Label" hideLabel />

      <div>
        <div id="toggle-6-label" style={{ marginBlockEnd: '0.5rem' }}>
          Internal aria-label toggle
        </div>
        <Toggle aria-labelledby="toggle-6-label" id="toggle-6" />
      </div>

      <div>
        <label
          id="toggle-7-label"
          htmlFor="toggle-7"
          style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          External toggle label
        </label>
        <Toggle aria-labelledby="toggle-7-label" id="toggle-7" />
      </div>
    </VStack>
  );
};
