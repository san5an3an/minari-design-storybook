// @ts-nocheck
import React from 'react';
import { Anchor, Col, Row } from 'antd';

const App: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        replace
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: '1부',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: '2부',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: '3부',
          },
        ]}
      />
    </Col>
  </Row>
);

export default App;