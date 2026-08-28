// @ts-nocheck
import React from 'react';
import { Flex, Segmented } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented size="large" options={['일간', '주간', '월간', '분기별', '연간']} />
    <Segmented options={['일간', '주간', '월간', '분기별', '연간']} />
    <Segmented size="small" options={['일간', '주간', '월간', '분기별', '연간']} />
  </Flex>
);

export default App;