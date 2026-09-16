import { preview_Text as Text } from '@carbon/react';
import { Button } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { ContentSwitcher } from '@carbon/react';
import { Switch } from '@carbon/react';
import { Heading } from '@carbon/react';
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

export const UsageExamples = () => {
  const rtlText = 'שלום!!';
  const dropdownItems = [
    {
      id: 'option-0',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'option-1',
      text: rtlText,
    },
  ];
  return (
    <>
      <Heading>
        <Text>{rtlText}</Text>
      </Heading>
      <Button kind="ghost">
        <Text>{rtlText}</Text>
      </Button>
      <div style={{ width: 400 }}>
        <Dropdown
          id="default"
          titleText="Using <Text> with `itemToElement`"
          helperText="This is some helper text"
          label="Dropdown menu options"
          items={dropdownItems}
          itemToString={(item) => (item ? item.text : '')}
          itemToElement={(item) => <Text>{item.text}</Text>}
        />
      </div>
      <ContentSwitcher
        helperText="Using <Text> within <Switch>"
        onChange={() => {}}>
        <Switch name="one">
          <Text>{rtlText}</Text>
        </Switch>
        <Switch name="two" text="Second section" />
        <Switch name="three" text="Third section" />
      </ContentSwitcher>
    </>
  );
};
