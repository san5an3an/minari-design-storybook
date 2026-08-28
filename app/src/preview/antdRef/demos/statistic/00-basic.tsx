// @ts-nocheck
import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="활성 사용자" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="계정 잔액 (원)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        충전
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="활성 사용자" value={112893} loading />
    </Col>
  </Row>
);

export default App;