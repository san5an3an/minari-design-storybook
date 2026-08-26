import React from 'react';
import { BorderBeam, Card, Flex, Tag, Typography } from 'antd';

const durations = [
  {
    name: '빠름',
    seconds: 3,
    description: '잠깐 강조하거나 지금 움직이는 모듈에 쓰는 빠른 흐름이에요.',
  },
  {
    name: '기본값',
    seconds: 6,
    description: '강조하는 상자 대부분에 쓰는 원래 속도예요.',
  },
  {
    name: '느림',
    seconds: 12,
    description: '오래 떠 있는 판이나 은은한 면에 어울리는 느린 흐름이에요.',
  },
];

const App: React.FC = () => (
  <Flex gap={16} wrap>
    {durations.map(({ name, seconds, description }) => (
      <div key={name} style={{ width: 220 }}>
        <BorderBeam duration={seconds}>
          <Card title={name} extra={<Tag variant="filled">{seconds}s</Tag>}>
            <Typography.Text type="secondary">{description}</Typography.Text>
          </Card>
        </BorderBeam>
      </div>
    ))}
  </Flex>
);

export default App;