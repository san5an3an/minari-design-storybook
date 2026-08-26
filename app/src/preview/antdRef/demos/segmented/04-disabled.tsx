import React from 'react';
import { Flex, Segmented } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented options={['지도', 'Transit', '위성']} disabled />
    <Segmented
      options={[
        '일간',
        { label: '주간', value: '주간', disabled: true },
        '월간',
        { label: '분기별', value: '분기별', disabled: true },
        '연간',
      ]}
    />
  </Flex>
);

export default App;