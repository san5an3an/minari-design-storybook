import React from 'react';
import { Col, Divider, Row } from 'antd';

const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">퍼센트 열</Divider>
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    <Divider titlePlacement="start">남은 자리 채우기</Divider>
    <Row>
      <Col flex="100px">100px</Col>
      <Col flex="auto">남은 자리 채우기</Col>
    </Row>
    <Divider titlePlacement="start">날 것 그대로의 flex 스타일</Divider>
    <Row>
      <Col flex="1 1 200px">1 1 200px</Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row>

    <Row wrap={false}>
      <Col flex="none">
        <div style={{ padding: '0 16px' }}>none</div>
      </Col>
      <Col flex="auto">줄바꿈 없이 자동</Col>
    </Row>
  </>
);

export default App;