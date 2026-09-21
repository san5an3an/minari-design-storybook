// @ts-nocheck
import { preview_TextDirection as TextDirection, preview_Text as Text } from '@carbon/react';
import { RadioButtonGroup } from '@carbon/react';
import { RadioButton } from '@carbon/react';
import mdx from './Text.mdx';


export default {
  title: 'Preview/preview_Text',
  component: Text,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const SetTextDirection = () => {
  const legendText = 'הכותרת שלי!';

  return (
    <TextDirection
      getTextDirection={(text) => {
        if (text === legendText) {
          return 'ltr';
        }
        return 'auto';
      }}>
      <RadioButtonGroup
        legendText={legendText}
        name="radio-button-group"
        defaultSelected="radio-1"
        style={{ maxWidth: '400px' }}>
        <RadioButton
          labelText="שלום עולם Option 1"
          value="radio-1"
          id="radio-1"
        />
        <RadioButton
          labelText="שלום עולם Option 2"
          value="radio-2"
          id="radio-2"
        />
        <RadioButton
          labelText="שלום עולם Option 3"
          value="radio-3"
          id="radio-3"
        />
      </RadioButtonGroup>
    </TextDirection>
  );
};
