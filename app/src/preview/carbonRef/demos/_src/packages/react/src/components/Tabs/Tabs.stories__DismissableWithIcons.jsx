// @ts-nocheck
import React from 'react';
import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import { Button } from '@carbon/react';
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


const lineTabsSizeArgType = {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md'],
    description: 'Specify the size of the tabs',
  },
};

const lineTabsSizeArgs = {
  size: 'md',
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

export const DismissableWithIcons = ({ contained, size }) => {
  const tabs = [
    {
      label: 'Dashboard',
      panel: <TabPanel key={0}>Dashboard</TabPanel>,
    },
    {
      label: 'Monitoring',
      panel: <TabPanel key={1}>Monitoring</TabPanel>,
    },
    {
      label: 'Activity',
      panel: <TabPanel key={2}>Activity</TabPanel>,
    },
    {
      label: 'Settings',
      panel: <TabPanel key={3}>Settings</TabPanel>,
      disabled: true,
    },
  ];
  const [renderedTabs, setRenderedTabs] = React.useState(tabs);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleTabChange = (evt) => {
    setSelectedIndex(evt.selectedIndex);
  };

  const handleCloseTabRequest = (tabIndex) => {
    if (renderedTabs[tabIndex].disabled) {
      return;
    }
    const selectedTab = renderedTabs[selectedIndex];

    const filteredTabs = renderedTabs.filter((_, index) => index !== tabIndex);
    if (tabIndex === selectedIndex) {
      const defaultTabIndex = filteredTabs.findIndex((tab) => !tab.disabled);
      setSelectedIndex(defaultTabIndex);
    } else {
      setSelectedIndex(filteredTabs.indexOf(selectedTab));
    }
    setRenderedTabs(filteredTabs);
  };

  const resetTabs = () => {
    setRenderedTabs(tabs);
  };

  const icons = [Dashboard, CloudMonitoring, Settings, Activity];

  return (
    <>
      <Button style={{ marginBottom: '3rem' }} onClick={resetTabs}>
        Reset
      </Button>
      <Tabs
        selectedIndex={selectedIndex}
        onChange={handleTabChange}
        dismissable
        onTabCloseRequest={handleCloseTabRequest}>
        <TabList contained={contained} size={size}>
          {renderedTabs.map((tab, index) => (
            <Tab key={index} disabled={tab.disabled} renderIcon={icons[index]}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>{renderedTabs.map((tab) => tab.panel)}</TabPanels>
      </Tabs>
    </>
  );
};

DismissableWithIcons.argTypes = lineTabsSizeArgType;
DismissableWithIcons.args = lineTabsSizeArgs;
