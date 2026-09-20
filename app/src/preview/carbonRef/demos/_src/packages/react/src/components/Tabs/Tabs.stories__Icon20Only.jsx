// @ts-nocheck
import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel, IconTab } from '@carbon/react';
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

export const Icon20Only = (args) => {
  return (
    <Tabs>
      <TabList iconSize="lg">
        <IconTab label="Analyze" disabled>
          <IbmWatsonDiscovery size={20} aria-label="Analyze" />
        </IconTab>
        <IconTab label="Activity">
          <Activity size={20} aria-label="Activity" />
        </IconTab>
        <IconTab label="New Notifications" {...args}>
          <Notification size={20} aria-label="Notification" />
        </IconTab>
        <IconTab label="Chat">
          <Chat size={20} aria-label="Chat" />
        </IconTab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab Panel 1</TabPanel>
        <TabPanel>Tab Panel 2</TabPanel>
        <TabPanel>Tab Panel 3</TabPanel>
        <TabPanel>Tab Panel 4</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

Icon20Only.argTypes = {
  badgeIndicator: {
    description: '**Experimental**: Display an empty dot badge on the Tab.',
    control: {
      type: 'boolean',
    },
  },
};
