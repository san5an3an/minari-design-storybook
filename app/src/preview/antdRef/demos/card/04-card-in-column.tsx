// @ts-nocheck
import React from 'react';
import { Card, Col, Row } from 'antd';

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="카드 제목" variant="borderless">
        카드 내용
      </Card>
    </Col>
    <Col span={8}>
      <Card title="카드 제목" variant="borderless">
        카드 내용
      </Card>
    </Col>
    <Col span={8}>
      <Card title="카드 제목" variant="borderless">
        카드 내용
      </Card>
    </Col>
  </Row>
);

export default App;