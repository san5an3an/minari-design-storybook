import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';

const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 273,
};

const App: React.FC = () => (
  <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
    <Flex justify="space-between">
      <img
        draggable={false}
        alt="아바타"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
      <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
        <Typography.Title level={3}>
          “antd 는 기업용 UI 디자인 언어이자 React UI 라이브러리예요.”
        </Typography.Title>
        <Button type="primary" href="https://ant.design" target="_blank">
          시작하기
        </Button>
      </Flex>
    </Flex>
  </Card>
);

export default App;