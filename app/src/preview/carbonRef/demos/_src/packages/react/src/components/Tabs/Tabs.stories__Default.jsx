import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import mdx from './Tabs.mdx';


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

export const Default = (args) => {
  return (
    <Tabs onTabCloseRequest={() => {}}>
      <TabList {...args}>
        <Tab>Dashboard</Tab>
        <Tab>Monitoring</Tab>
        <Tab>Activity</Tab>
        <Tab>Settings</Tab>
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

Default.args = {
  contained: false,
  dismissable: false,
  ...lineTabsSizeArgs,
  scrollDebounceWait: 200,
};

Default.argTypes = {
  activation: {
    control: { type: 'select' },
    options: ['automatic', 'manual'],
  },
  contained: {
    control: {
      type: 'boolean',
    },
  },
  dismissable: {
    control: false,
  },
  iconSize: {
    control: { type: 'select' },
    options: ['default', 'lg'],
  },
  leftOverflowButtonProps: {
    control: {
      type: 'object',
    },
  },
  rightOverflowButtonProps: {
    control: {
      type: 'object',
    },
  },
  scrollDebounceWait: {
    control: {
      type: 'number',
    },
  },
  scrollIntoView: {
    control: {
      type: 'boolean',
    },
  },
  ...lineTabsSizeArgType,
};
