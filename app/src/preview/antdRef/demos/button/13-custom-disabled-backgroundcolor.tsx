// @ts-nocheck
import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" wrap>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBgDisabled: 'rgba(0,0,0,0.1)',
            dashedBgDisabled: 'rgba(0,0,0,0.4)',
          },
        },
      }}
    >
      <Button type="primary" disabled>
        주요 버튼
      </Button>
      <Button disabled>기본 버튼</Button>
      <Button type="dashed" disabled>
        파선 버튼
      </Button>
    </ConfigProvider>
  </Flex>
);

export default App;