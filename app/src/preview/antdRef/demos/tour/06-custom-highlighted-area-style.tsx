// @ts-nocheck
import React, { useRef, useState } from 'react';
import { Button, Col, Row, Slider, Space, Tour, Typography } from 'antd';
import type { TourProps } from 'antd';

const { Text } = Typography;

const App: React.FC = () => {
  const tourNodeRef = useRef(null);
  const [radius, setRadius] = useState(8);
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);
  const [offset, setOffset] = useState(2);
  const [open, setOpen] = useState(false);
  const [offsetDirection, setOffsetDirection] = useState<'both' | 'individual'>('individual');

  const steps: TourProps['steps'] = [
    {
      title: '파일 올리기',
      description: '파일을 여기에 놓아 주세요.',
      cover: (
        <img
          draggable={false}
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => tourNodeRef.current,
    },
  ];

  const offsetGap =
    offsetDirection === 'both'
      ? { offset }
      : {
          offset: [offsetX, offsetY] as [number, number],
        };
  return (
    <div ref={tourNodeRef}>
      <Button type="primary" onClick={() => setOpen(true)}>
        둘러보기 시작
      </Button>
      <Space style={{ display: 'flex', marginTop: 12 }} vertical>
        <Row>
          <Col span={6}>
            <Text>모서리:</Text>
          </Col>
          <Col span={12}>
            <Slider value={radius} onChange={(val) => val && setRadius(val)} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text> 치우침:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offset}
              max={50}
              onChange={(val) => val && setOffset(val)}
              onFocus={() => setOffsetDirection('both')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>가로 치우침:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offsetX}
              max={50}
              onChange={(val) => val && setOffsetX(val)}
              onFocus={() => setOffsetDirection('individual')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>세로 치우침:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offsetY}
              max={50}
              onChange={(val) => val && setOffsetY(val)}
              onFocus={() => setOffsetDirection('individual')}
            />
          </Col>
        </Row>
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        gap={{ ...offsetGap, radius }}
      />
    </div>
  );
};

export default App;