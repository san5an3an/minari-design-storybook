// @ts-nocheck
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    hoverable
    variant="borderless"
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="유럽 거리의 비트" description="www.instagram.com" />
  </Card>
);

export default App;