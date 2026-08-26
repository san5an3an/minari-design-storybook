import React from 'react';
import { Divider, Flex, Timeline } from 'antd';
import type { TimelineProps } from 'antd';

const sharedProps: TimelineProps = {
  orientation: 'horizontal',
  items: [
    {
      content: '시작',
    },
    {
      content: '시작',
    },
    {
      content: '기다리는 중',
    },
    {
      content: '완료',
    },
  ],
};

const App: React.FC = () => (
  <Flex vertical>
    <Timeline {...sharedProps} mode="start" />
    <Divider />
    <Timeline {...sharedProps} mode="end" />
    <Divider />
    <Timeline {...sharedProps} mode="alternate" />
  </Flex>
);

export default App;