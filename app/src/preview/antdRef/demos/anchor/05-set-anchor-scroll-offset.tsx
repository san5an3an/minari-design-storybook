// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Anchor, Col, Row } from 'antd';

const style: React.CSSProperties = {
  height: '30vh',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  position: 'fixed',
  top: 0,
  insetInlineStart: 0,
  width: '75%',
  color: '#fff',
};

const App: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', marginTop: '30vh' }}
          >
            1부
          </div>
          <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
            2부
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            3부
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              { key: 'part-1', href: '#part-1', title: '1부' },
              { key: 'part-2', href: '#part-2', title: '2부' },
              { key: 'part-3', href: '#part-3', title: '3부' },
            ]}
          />
        </Col>
      </Row>
      <div style={style} ref={topRef}>
        <div>위에 고정된 덩어리</div>
      </div>
    </div>
  );
};

export default App;