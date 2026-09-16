import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Checkbox } from '@carbon/react';
import { Button } from '@carbon/react';
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

export const Manual = () => {
  return (
    <Tabs>
      <TabList activation="manual">
        <Tab>Dashboard</Tab>
        <Tab>Monitoring</Tab>
        <Tab title="Tab label 4">Activity</Tab>
        <Tab>Analyze</Tab>
        <Tab disabled>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab Panel 1</TabPanel>
        <TabPanel>
          <form style={{ margin: '2em' }}>
            <legend className={`cds--label`}>Validation example</legend>
            <Checkbox id="cb" labelText="Accept privacy policy" />
            <Button
              style={{ marginTop: '1rem', marginBottom: '1rem' }}
              type="submit">
              Submit
            </Button>
            <TextInput
              type="text"
              labelText="Text input label"
              helperText="Optional help text"
              id="text-input-1"
            />
          </form>
        </TabPanel>
        <TabPanel>Tab Panel 3</TabPanel>
        <TabPanel>Tab Panel 4</TabPanel>
        <TabPanel>Tab Panel 5</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
