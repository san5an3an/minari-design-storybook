// @ts-nocheck
import React from 'react';
import { Divider, Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';

const items = [
  {
    title: '끝남',
    content: '내용이 들어가는 자리예요.',
  },
  {
    title: '진행 중',
    content: '내용이 들어가는 자리예요.',
  },
  {
    title: '기다리는 중',
    content: '내용이 들어가는 자리예요.',
  },
];

const sharedProps: StepsProps = {
  type: 'dot',
  current: 1,
  items,
};

const sharedVerticalProps = {
  ...sharedProps,
  orientation: 'vertical',
  style: {
    flex: 'auto',
  },
} as const;

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Steps {...sharedProps} />
    <Steps {...sharedProps} variant="outlined" />
    <Divider />
    <Flex gap="medium">
      <Steps {...sharedVerticalProps} />
      <Steps {...sharedVerticalProps} variant="outlined" />
    </Flex>
  </Flex>
);

export default App;