// @ts-nocheck
import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import mdx from './Tabs.mdx';
import { TabsSkeleton } from '@carbon/react';


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

export const Skeleton = () => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <TabsSkeleton />
    </div>
  );
};
