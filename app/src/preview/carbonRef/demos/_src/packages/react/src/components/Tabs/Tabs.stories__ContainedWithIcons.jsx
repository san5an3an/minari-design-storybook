// @ts-nocheck
import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Checkbox } from '@carbon/react';
import { Button } from '@carbon/react';
import { Layer } from '@carbon/react';
import mdx from './Tabs.mdx';
import {
  Dashboard,
  Activity,
  CloudMonitoring,
  Settings,
  IbmWatsonDiscovery,
  Notification,
  Chat,
  Task,
  Restart,
  Icon,
} from '@carbon/icons-react';


const tabsSizeArgType = {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
    description: 'Specify the size of the tabs',
  },
};

const containedTabsSizeArgs = {
  size: 'lg',
};

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

export const ContainedWithIcons = (args) => {
  return (
    <Tabs>
      <TabList contained size={args.size}>
        <Tab renderIcon={Dashboard}>Dashboard</Tab>
        <Tab renderIcon={CloudMonitoring}>Monitoring</Tab>
        <Tab renderIcon={Activity}>Activity</Tab>
        <Tab renderIcon={IbmWatsonDiscovery}>Analyze</Tab>
        <Tab disabled renderIcon={Settings}>
          Settings
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab Panel 1</TabPanel>
        <TabPanel>
          <Layer>
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
              />
            </form>
          </Layer>
        </TabPanel>
        <TabPanel>Tab Panel 3</TabPanel>
        <TabPanel>Tab Panel 4</TabPanel>
        <TabPanel>Tab Panel 5</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

ContainedWithIcons.argTypes = tabsSizeArgType;
ContainedWithIcons.args = containedTabsSizeArgs;
