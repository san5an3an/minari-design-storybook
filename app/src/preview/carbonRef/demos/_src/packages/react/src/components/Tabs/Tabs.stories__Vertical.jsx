// @ts-nocheck
import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Checkbox } from '@carbon/react';
import { Button } from '@carbon/react';
import { RadioButtonGroup } from '@carbon/react';
import { RadioButton } from '@carbon/react';
import { Stack } from '@carbon/react';
import { Layer } from '@carbon/react';
import mdx from './Tabs.mdx';


export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    TabsVertical,
    TabList,
    TabListVertical,
    Tab,
    TabPanels,
    TabPanel,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
  },
};

export const Vertical = (args) => {
  const { size, ...tabsVerticalArgs } = args;
  return (
    <TabsVertical {...tabsVerticalArgs}>
      <TabListVertical size={size}>
        <Tab>Dashboard</Tab>
        <Tab>
          Extra long label that will go two lines then truncate when it goes
          beyond the Tab length
        </Tab>
        <Tab>Activity</Tab>
        <Tab>Analyze</Tab>
        <Tab>Investigate </Tab>
        <Tab>Learn</Tab>
        <Tab disabled>Settings</Tab>
      </TabListVertical>
      <TabPanels>
        <TabPanel>Tab Panel 1</TabPanel>
        <TabPanel>
          <Layer>
            <form style={{ margin: '2em' }}>
              <Stack gap={7}>
                <TextInput id="one" labelText="First Name" />
                <TextInput id="three" labelText="Middle Initial" />
                <TextInput id="two" labelText="Last Name" />
                <RadioButtonGroup
                  legendText="Radio button heading"
                  name="formgroup-default-radio-button-group"
                  defaultSelected="radio-1">
                  <RadioButton
                    labelText="Option 1"
                    value="radio-1"
                    id="radio-1"
                  />
                  <RadioButton
                    labelText="Option 2"
                    value="radio-2"
                    id="radio-2"
                  />
                  <RadioButton
                    labelText="Option 3"
                    value="radio-3"
                    id="radio-3"
                  />
                </RadioButtonGroup>
                <Checkbox labelText={`Checkbox one`} id="checkbox-label-1" />
                <Checkbox labelText={`Checkbox two`} id="checkbox-label-2" />
                <Button>Submit</Button>
              </Stack>
            </form>
          </Layer>
        </TabPanel>
        <TabPanel>Tab Panel 3</TabPanel>
        <TabPanel>Tab Panel 4</TabPanel>
        <TabPanel>Tab Panel 5</TabPanel>
        <TabPanel>Tab Panel 6</TabPanel>
        <TabPanel>Tab Panel 7</TabPanel>
      </TabPanels>
    </TabsVertical>
  );
};

Vertical.args = {
  height: '',
  size: 'xl',
};

Vertical.argTypes = {
  height: {
    control: {
      type: 'text',
    },
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Specify the size of the vertical tabs',
  },
};

Vertical.parameters = {
  controls: {
    exclude: ['dismissable'],
  },
};
