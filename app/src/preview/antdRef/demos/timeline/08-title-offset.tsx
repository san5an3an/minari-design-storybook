// @ts-nocheck
import React from 'react';
import { Flex, Timeline, Typography } from 'antd';
import type { TimelineProps } from 'antd';

const items: TimelineProps['items'] = [
  { title: '05:10', content: '서비스 만들기' },
  { title: '09:03', content: '초기 네트워크 문제 해결' },
  { content: '기술 테스트' },
  { title: '11:28', content: '네트워크 문제 해결 중' },
];

const App: React.FC = () => {
  return (
    <Flex vertical gap="medium">
      <Typography.Title level={5} style={{ margin: 0 }}>
        titleSpan = 100px
      </Typography.Title>
      <Timeline items={items} titleSpan="100px" />
      <Typography.Title level={5} style={{ margin: 0 }}>
        titleSpan = 25%
      </Typography.Title>
      <Timeline items={items} titleSpan="25%" />
      <Typography.Title level={5} style={{ margin: 0 }}>
        titleSpan = 18, mode = end
      </Typography.Title>
      <Timeline items={items} titleSpan={18} mode="end" />
    </Flex>
  );
};

export default App;