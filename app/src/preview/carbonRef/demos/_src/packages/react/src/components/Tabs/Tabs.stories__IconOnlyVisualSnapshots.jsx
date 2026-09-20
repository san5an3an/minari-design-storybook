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

export const IconOnlyVisualSnapshots = (args) => {
  return (
    <Tabs>
      <TabList iconSize="default">
        <IconTab label="Analyze" disabled>
          <IbmWatsonDiscovery aria-label="Analyze" />
        </IconTab>
        <IconTab label="Activity">
          <Activity aria-label="Activity" />
        </IconTab>
        <IconTab label="New Notifications" {...args}>
          <Notification aria-label="Notification" />
        </IconTab>
        <IconTab label="Chat">
          <Chat aria-label="Chat" />
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

IconOnlyVisualSnapshots.argTypes = {
  badgeIndicator: {
    description: '**Experimental**: Display an empty dot badge on the Tab.',
    control: {
      type: 'boolean',
    },
  },
};

IconOnlyVisualSnapshots.play = async ({ userEvent }) => {
  await userEvent.keyboard('{Tab}');
};

IconOnlyVisualSnapshots.tags = ['!dev', '!autodocs'];
