import React from 'react';
import { Flex, Progress, Tooltip } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Tooltip title="완료 3 / 진행 3 / 할 일 4">
      <Progress percent={60} success={{ percent: 30 }} />
    </Tooltip>
    <Flex gap="small" wrap>
      <Tooltip title="완료 3 / 진행 3 / 할 일 4">
        <Progress percent={60} success={{ percent: 30 }} type="circle" />
      </Tooltip>
      <Tooltip title="완료 3 / 진행 3 / 할 일 4">
        <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
      </Tooltip>
    </Flex>
  </Flex>
);

export default App;