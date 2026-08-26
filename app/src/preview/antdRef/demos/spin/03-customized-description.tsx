import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const App: React.FC = () => (
  <Flex gap="medium" vertical>
    <Flex gap="medium">
      <Spin description="불러오는 중" size="small">
        {content}
      </Spin>
      <Spin description="불러오는 중">{content}</Spin>
      <Spin description="불러오는 중" size="large">
        {content}
      </Spin>
    </Flex>
    <Spin description="불러오는 중…">
      <Alert
        title="알림 제목이에요"
        description="이 알림에 대한 자세한 설명이에요."
        type="info"
      />
    </Spin>
  </Flex>
);

export default App;